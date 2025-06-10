import { atom, DefaultValue, selector } from 'recoil';
import axios from 'axios';
import { inject, injectable } from 'inversify';
import uniqid from 'uniqid';

import { PHONE_FORMAT_POLICY, PhoneFormatPolicy, TypicalPhoneFormatPolicy } from '../shared/domain/PhoneFormatPolicy';
import { MESSAGE_SENDER, SendMessage } from './SendMessage';
import { SCRIPT_LOGGER, ScriptLogger } from '../shared/domain/ScriptLogger';
import { ITotalKeyword } from '../shared/KeywordAtom';

export enum CounselingField {
  DEFAULT = '비상주사무실',
  A = 'A.비상주+세무',
  B = 'B.비상주+세무+법인설립'
}

export enum UsePeriod {
  _3 = '3개월',
  _6 = '6개월',
  _12 = '12개월',
  _24 = '24개월',
  _36 = '36개월',
};

export const requestErrorState = atom<IRequestError>({
  key: 'requestErrorState',
  default: {}
});

export const requestState = selector<RequestForm>({
  key: 'requestState',
  get: ({ get }) => {
    const name = get(nameState);
    const phone = get(phoneState);
    const comment = get(commentState);
    const isPrivacyPolicyChecked = get(isPrivacyPolicyCheckedState);
    const bizType = get(bizTypeState);
    const counselingType = get(counselingTypeState);
    const period = get(periodState);

    return {
      name,
      phone,
      comment,
      isPrivacyPolicyChecked,
      bizType,
      counselingType,
      usePeriod: period
    };
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(nameState);
      reset(phoneState);
      reset(commentState);
      reset(isPrivacyPolicyCheckedState);
      reset(bizTypeState);
      reset(counselingTypeState);
      reset(periodState);
      return;
    }

    const phoneFormatPolicy = new TypicalPhoneFormatPolicy();
    if (newValue.name != null) set(nameState, newValue.name);
    if (newValue.phone != null) set(phoneState, phoneFormatPolicy.changeFormat(newValue.phone));
    if (newValue.comment != null) set(commentState, newValue.comment);
    set(isPrivacyPolicyCheckedState, newValue.isPrivacyPolicyChecked);
    if (newValue.bizType != null) set(bizTypeState, newValue.bizType ?? '');
    if (newValue.counselingType != null) set(counselingTypeState, newValue.counselingType as CounselingField);
    if (newValue.usePeriod != null) set(periodState, newValue.usePeriod as UsePeriod);
  }
});

export const nameState = atom<string>({
  key: 'nameState',
  default: ''
});

export const phoneState = atom<string>({
  key: 'phoneState',
  default: ''
});

export const bizTypeState = atom<string>({
  key: 'bizTypeState',
  default: ''
});

export const commentState = atom<string>({
  key: 'commentState',
  default: ''
});

export const isPrivacyPolicyCheckedState = atom<boolean>({
  key: 'isPrivacyPolicyCheckedState',
  default: false
});

export const requestTypeState = atom<string>({
  key: 'requestTypeState',
  default: ''
});

export const requestId = atom<string>({
  key: 'requestId',
  default: ''
});

export const counselingTypeState = atom<CounselingField>({
  key: 'counselingTypeState',
  default: CounselingField.DEFAULT
});

export const periodState = atom<UsePeriod>({
  key: 'periodState',
  default: UsePeriod._3
});

export class RequestForm {
  name: string = '';
  phone: string = '';
  isPrivacyPolicyChecked: boolean = false;
  comment?: string = '';
  counselingType?: CounselingField;
  usePeriod?: UsePeriod;
  bizType?: string;

  static createForm(
    request: RequestForm,
    keyword: ITotalKeyword
  ) {
    return {
      requestId: uniqid(),
      name: request.name,
      phone: request.phone,
      question: request.comment,
      category: request.bizType,
      type: request.counselingType,
      usePeriod: request.usePeriod,
      firstKeyword: keyword.first,
      finalKeyword: keyword.final,
    };
  }
}

export const resetRequestState = atom<RequestForm>({
  key: 'resetRequestState',
  default: new RequestForm()
});

interface IRequestError {
  isNameError?: boolean,
  isPhoneEmpty?: boolean,
  isPhoneError?: boolean,
  // isCommentError?: boolean,
  isBizTypeError?: boolean,
  isPrivacyPolicyError?: boolean,
};

export class RequestError {
  isNameError = false;
  isPhoneEmpty = false;
  isPhoneError = false;
  // isCommentError = false;
  isBizTypeError = false;
  isPrivacyPolicyError = false;

  static create(
    {
      isNameError = false,
      isPhoneEmpty = false,
      isPhoneError = false,
      // isCommentError = false,
      isBizTypeError = false,
      isPrivacyPolicyError = false
    }: IRequestError): RequestError {
    const errors = new RequestError();
    errors.isNameError = isNameError;
    errors.isPhoneEmpty = isPhoneEmpty;
    errors.isPhoneError = isPhoneError;
    // errors.isCommentError = isCommentError;
    errors.isBizTypeError = isBizTypeError;
    errors.isPrivacyPolicyError = isPrivacyPolicyError;
    return errors;
  }

  isValid(): boolean {
    return !this.isNameError && !this.isPhoneEmpty && !this.isPhoneError && !this.isBizTypeError && !this.isPrivacyPolicyError;
  }
}

export const REQUEST_SERVICE = Symbol('REQUEST_SERVICE');

@injectable()
export class RequestService {
  @inject(PHONE_FORMAT_POLICY)
  private readonly phoneFormatPolicy!: PhoneFormatPolicy;
  @inject(SCRIPT_LOGGER)
  private readonly scriptLogger!: ScriptLogger;
  @inject(MESSAGE_SENDER)
  private readonly messageSender!: SendMessage;

  checkRequest(request: RequestForm): RequestError {
    return RequestError.create({
      isNameError: request.name === '',
      isPhoneEmpty: request.phone === '',
      isPhoneError: !this.phoneFormatPolicy.isValid(request.phone),
      isBizTypeError: request.bizType === '',
      isPrivacyPolicyError: !request.isPrivacyPolicyChecked //false 면 error
    });
  }

  async sendRequest(request: RequestForm, keyword: ITotalKeyword) {
    try {
      const form = RequestForm.createForm(request, keyword);
      await axios.post('https://msa.ailabscorp.com/register/request-balance-space', form);
      await this.scriptLogger.sendRequestOccuredLog();
      // await this.messageSender.sendConfirmRequestMessage({
      //   phone: form.phone,
      //   name: form.name,
      //   bizType: form.category ?? '',
      //   counselingField: form.type ?? '비상주사무실',
      //   usePeriod: form.usePeriod ?? UsePeriod._3
      // });
      // new Cookies().remove('ads_keyword');
    } catch (e) {
      console.log(e);
    }
  }

  setPhoneNumber(phone: string): {
    result?: string,
    error?: {
      isPhoneError: boolean,
      isPhoneEmpty: boolean
    }
  } {
    const phoneFormatPolicy = new TypicalPhoneFormatPolicy();

    if (phoneFormatPolicy.isCompletedNumber(phone)) {
      return {
        error: {
          isPhoneError: false,
          isPhoneEmpty: false
        }
      };
    }

    if (phoneFormatPolicy.hasInvalidForm(phone)) {
      return {
        error: {
          isPhoneError: true,
          isPhoneEmpty: false
        }
      };
    }

    return {
      result: phoneFormatPolicy.changeFormat(phone)
    };
  }
}

function isEmptyCheck(result: string) {
  return result === null || result.length === 0;
}

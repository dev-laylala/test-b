import { injectable } from 'inversify';
import axios from 'axios';

import { KakaoMessageSender } from '../shared/domain/KakaoMessageSender';
import { getFormalPhone, getFormalTime } from './RequestPolicy';

export type CounselingField = '비상주사무실' | 'A.비상주+세무' | 'B.비상주+세무+법인설립';
export type UsePeriod = '3개월' | '6개월' | '12개월' | '24개월' | '36개월';

export interface BalanceSpaceConfirmProps {
  phone: string;
  name: string;
  bizType: string;
  counselingField: CounselingField;
  usePeriod: UsePeriod;
}

class KakaoMessageForm {
  name: string = '';
  phone: string = '';
  counselingField: CounselingField = '비상주사무실';
  usePeriod: UsePeriod = '3개월';
  bizType: string = '';
  time: string = '';

  static createForm(
    {
      phone,
      name,
      bizType,
      counselingField,
      usePeriod
    }: BalanceSpaceConfirmProps
  ) {
    return {
      name,
      phone: getFormalPhone(phone),
      time: getFormalTime(),
      counselingField,
      bizType,
      usePeriod
    };
  }
}

export const MESSAGE_SENDER = Symbol('MESSAGE_SENDER');

@injectable()
export class SendMessage implements KakaoMessageSender {
  async sendConfirmRequestMessage(props: BalanceSpaceConfirmProps): Promise<string> {
    try {
      const form = KakaoMessageForm.createForm(props);
      const { data } = await axios.post('https://api.ailabscorp.com/message/balancespace/confirm', form);
      return data.messageId;
    } catch (e) {
      console.log(e);
      return 'ERROR: ' + e;
    }
  }
}

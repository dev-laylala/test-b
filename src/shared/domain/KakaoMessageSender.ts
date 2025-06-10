export const KAKAO_MESSAGE_SENDER = Symbol('KAKAO_MESSAGE_SENDER');

export type CounselingField = '비상주사무실' | 'A.비상주+세무' | 'B.비상주+세무+법인설립';
export type UsePeriod = '3개월' | '6개월' | '12개월' | '24개월';

export interface BalanceSpaceConfirmProps {
  phone: string;
  name: string;
  bizType: string;
  counselingField: CounselingField;
  usePeriod: UsePeriod;
}

export interface KakaoMessageSender {
  sendConfirmRequestMessage(
    {
      phone,
      name,
      bizType,
      counselingField,
      usePeriod
    }: BalanceSpaceConfirmProps): void;
}

import "reflect-metadata";
import { injectable } from "inversify";

export const PHONE_FORMAT_POLICY = Symbol("PHONE_FORMAT_POLICY");

export interface PhoneFormatPolicy {
  changeFormat(phone: string): string;

  isValid(phone?: string): boolean;
}

@injectable()
export class TypicalPhoneFormatPolicy implements PhoneFormatPolicy {
  public changeFormat(phone: string): string {
    let number = phone.replace(/[^0-9]/g, "");
    number = number.replace("-", "");
    number = number.replace(" ", "");

    let formatNum = "";

    if (number.length <= 8) {
      formatNum = number.replace(/(\d{4})(\d{1,})/, "$1-$2");
    } else if (number.indexOf("02") === 0) {
      if (number.length < 10) {
        formatNum = number.replace(/(\d{2})(\d{3})(\d{1,})/, "$1-$2-$3");
      } else if (number.length === 10) {
        formatNum = number.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      } else {
        formatNum = number.replace(/(\d{2})(\d{4})(\d{4})(\d{0,})/, "$1-$2-$3");
      }
    } else if (number.length === 11) {
      formatNum = number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    } else if (number.length < 11) {
      formatNum = number.replace(/(\d{3})(\d{3})(\d{1,})/, "$1-$2-$3");
    } else {
      formatNum = number.replace(/(\d{3})(\d{4})(\d{4})(\d{1,})/, "$1-$2-$3");
    }

    return formatNum;
  }

  public isCompletedNumber(phone: string): boolean {
    if (phone.startsWith("02") && phone.length === 13) {
      return true;
    }

    return phone.length === 14;
  }

  public isValid(phone?: string): boolean {
    if (phone === "" || phone == null) {
      return true;
    }

    let number = phone.replace(/[^0-9]/g, "");
    if (!phone.startsWith("0")) {
      return false;
    }
    if (phone.startsWith("02")) {
      return number.length >= 9;
    } else {
      return number.length >= 11;
    }
  }

  public hasInvalidForm(phone: string): boolean {
    return /[^0-9-]/g.test(phone);
  }

  public removeDash(phone: string): string {
    return phone.replace(/-/g, "");
  }
}

export const typicalPhoneFormatPolicy = new TypicalPhoneFormatPolicy();

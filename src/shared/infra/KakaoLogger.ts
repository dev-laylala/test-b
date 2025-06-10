// @ts-nocheck
import { ConversionLogger } from '../domain/ConversionLogger';

export class KakaoLogger implements ConversionLogger {
  constructor(private readonly id?: string) {}

  logConversionScript(): void {
    if (this.id) {
      // window.kakaoPixel(this.id).pageView();
      // window.kakaoPixel(this.id).completeRegistration();
    }
  }
}

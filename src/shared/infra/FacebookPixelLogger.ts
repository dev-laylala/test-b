// @ts-nocheck
import { ConversionLogger } from '../domain/ConversionLogger';

export class FacebookPixelLogger implements ConversionLogger {
  logConversionScript() {
    window.fbq('track', 'Contact');
  }
}

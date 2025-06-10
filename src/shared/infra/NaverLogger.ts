// @ts-nocheck
import { ConversionLogger } from '../domain/ConversionLogger';

export class NaverLogger implements ConversionLogger {
  logConversionScript() {
    console.log('naver conversion')
    window._nasa = {};
    if (window.wcs) {
      window._nasa.cnv = window.wcs.cnv('4', '1');
    }
    window.wcs_do(window._nasa);
  }
}

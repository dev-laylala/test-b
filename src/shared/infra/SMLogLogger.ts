// @ts-nocheck
import { ConversionLogger } from '../domain/ConversionLogger';

export class SMLogLogger implements ConversionLogger {
  logConversionScript(): void {
    console.log('smlog conversion');
    window.DaumConversionScriptLoaded = true;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = `var hpt_trace_info={'_mode':'q','_memid':''}`;
    document.head.appendChild(script);
  }
}

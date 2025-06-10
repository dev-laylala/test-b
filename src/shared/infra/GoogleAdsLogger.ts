// @ts-nocheck
import { ConversionLogger } from '../domain/ConversionLogger';
import ReactGA from 'react-ga4';

export class GoogleAdsLogger implements ConversionLogger {
  constructor(
    private readonly id?: string,
    private readonly eventId?: string
  ) {
  }

  logConversionScript() {
    window.dataLayer.push('event', 'conversion', {
      send_to: this.id + '/' + this.eventId
    });
    window.gtag('event', 'conversion', {
      send_to: this.id + '/' + this.eventId
    });
    ReactGA.gtag('event', 'conversion', {'send_to': 'AW-728729200/DrjnCOPlv4AYEPCMvtsC'});
    ReactGA.gtag('event', 'conversion', {'send_to': 'AW-10850205033/tyNECLbWgqsDEOn647Uo'});
    console.log('google ads');
  }
}

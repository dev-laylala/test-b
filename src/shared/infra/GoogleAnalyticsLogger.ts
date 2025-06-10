import ReactGA from 'react-ga';

import { PathLogger } from '../domain/PathLogger';
import { isProductionMode } from '../utill';

export class GoogleAnalyticsLogger implements PathLogger {
  isIdExist = true;

  constructor(googleAnalyticsId?: string) {
    if (googleAnalyticsId === undefined) {
      this.isIdExist = false;
      return;
    }
    if (this.isValid()) {
      console.log(googleAnalyticsId);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  logPath(path: string): void {
    if (this.isValid()) {
      ReactGA.pageview(path);
    }
  }

  private isValid(): boolean {
    return isProductionMode() && this.isIdExist;
  }
}

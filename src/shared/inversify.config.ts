import { Container } from 'inversify';
import 'reflect-metadata';
// import ReactGA from 'react-ga';

import { PHONE_FORMAT_POLICY, PhoneFormatPolicy, TypicalPhoneFormatPolicy } from './domain/PhoneFormatPolicy';
import { REQUEST_SERVICE, RequestService } from '../store/RequestStore';
import { SCRIPT_LOGGER, ScriptLogger } from './domain/ScriptLogger';
import { CombinedLogger } from './infra/CombinedLogger';
import { SMLogLogger } from './infra/SMLogLogger';
import { KAKAO_MESSAGE_SENDER, KakaoMessageSender } from './domain/KakaoMessageSender';
import { MESSAGE_SENDER, SendMessage } from '../store/SendMessage';
import { NaverLogger } from './infra/NaverLogger';
import { GoogleAdsLogger } from './infra/GoogleAdsLogger';
import { KakaoLogger } from './infra/KakaoLogger';
import { FacebookPixelLogger } from './infra/FacebookPixelLogger';
import { GoogleAnalyticsLogger } from './infra/GoogleAnalyticsLogger';

// ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID!);
// ReactGA.set({page: window.location.pathname});
// ReactGA.pageview(window.location.pathname + window.location.search);
// console.log(process.env.REACT_APP_GOOGLE_ANALYTICS_ID!)

export const container = new Container();
container.bind<PhoneFormatPolicy>(PHONE_FORMAT_POLICY).to(TypicalPhoneFormatPolicy);
container.bind<ScriptLogger>(SCRIPT_LOGGER).toConstantValue(new CombinedLogger(
  [
    new SMLogLogger(),
    new NaverLogger(),
    // new GoogleAdsLogger(
    //   process.env.REACT_APP_GOOGLE_ADS_ID,
    //   process.env.REACT_APP_GOOGLE_ADS_BASE_ID,
    // ),
    new KakaoLogger(process.env.REACT_APP_KAKAO_MOMENT_ID),
    new FacebookPixelLogger(),
  ],
  [
    new GoogleAnalyticsLogger(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
  ],
));

container.bind(REQUEST_SERVICE).to(RequestService);
container.bind(MESSAGE_SENDER).to(SendMessage);

// container.bind<LocationService>(LOCATION_SERVICE).to(LocationService);
// container.bind<KakaoService>(KAKAO_SERVICE).to(KakaoService);

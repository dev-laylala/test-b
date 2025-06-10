import React, { useEffect } from 'react';
import { homeInit } from './utill';

export interface IHomeProps {
  request?: boolean,
  kakao?: boolean,
}

export const withHome = <P extends object>(Component: React.ComponentType<P>, sections: string[]) =>
  function WithHome({ request, kakao, ...props }: P & IHomeProps) {
    useEffect(() => homeInit(sections), []);
    return (<Component {...props as P} />);
  };



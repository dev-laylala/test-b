import React from 'react';
import { useMediaQuery } from 'react-responsive';

export function MobileBr() {
  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)'
  });
  return (<br style={{ display: isMobile ? 'block' : 'none' }} />);
}

import { useState } from 'react';
import { getOffset } from './SectionHelper';

export function isProductionMode() {
  return process.env.NODE_ENV === 'production';
}

export const useLocalStorage = (key: any, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.log('error: ', e);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setValue];
};

export function scrollWindow(path: string) {
  const offset = getOffset(path);
  window.scrollTo({
    behavior: 'smooth',
    top: offset
  });
}

export function checkSubLinkWithSection(sections: string[]) {
  const path = window.location.pathname.replace(/\//g, '');
  const headerHeight = document.getElementById('header')?.offsetHeight ?? 0;
  if (sections.indexOf(path) !== -1) {
    setTimeout(() => {
      const offset = getOffset(path) + headerHeight;
      window.scrollTo(0, offset);
    }, 100);
    return;
  }
  window.scroll(0, 0);
}

export function homeInit(sections: string[]) {
  checkSubLinkWithSection(sections);
}

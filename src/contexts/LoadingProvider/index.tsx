import Loading from '../../components/Loading';
import React from 'react';
import { PropsWithChildren, ReactNode, createContext, useContext, useState } from 'react';

interface IContextProps {
    show: () => void;
    hide: () => void;
}
const Context = createContext<IContextProps>({} as IContextProps);

const LoadingProvider = ({
  children
}:PropsWithChildren<ReactNode>) => {
  const [isLoading, setIsLoading] = useState(false);

  const show = () => {setIsLoading(true);}
  const hide = () => {setIsLoading(false);}
  return (
    <Context.Provider
      value={{
        show,
        hide
    }}>
      {children}
      <Loading
        open={isLoading}
      />
    </Context.Provider>
  );
};

export default LoadingProvider;
export const useLoading = () => useContext(Context);
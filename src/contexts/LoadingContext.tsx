import React, { useContext } from 'react';

interface ILoading {
  loading: boolean,
  show: () => void,
  hide: () => void
}
const initValue:ILoading = {
  loading: false,
  show: () => null,
  hide: () => null
}
export const LoadingContext = React.createContext(initValue);

export const useLoading = () => useContext(LoadingContext);
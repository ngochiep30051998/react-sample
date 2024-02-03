import { useEffect } from 'react';
export const useKeyDown = (callback: any, keys: any) => {
  const onKeyDown = (event: any) => {
    const wasAnyKeyPressed = keys.some((key: any) => event.key === key);
    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};
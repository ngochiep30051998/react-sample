const __PROMISES__: any = {};

export function takeFirst(key: string, handler: any) {
  const promise = __PROMISES__[key];
  if (promise) {
    return promise;
  }
  __PROMISES__[key] = handler();
  return __PROMISES__[key];
}

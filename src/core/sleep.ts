export const sleep = (timeout?: number) => new Promise((resolve, reject) => setTimeout(resolve, timeout || 0))
import dayjs from '../core/dayjs';

export class Cache {
  private masterKey;

  constructor(key: string) {
    this.masterKey = key ? key : 'cache_key';
  }

  public setCache(key: string, data: any, seconds: number = 1000000) {
    const timeout = dayjs().utc().add(seconds, 'second').valueOf();
    localStorage.setItem(
      this.getKey(key),
      JSON.stringify({
        timeout,
        data,
      })
    );
  }

  public getCache(key: string): { timeout: number; data: any } | null {
    const cached = localStorage.getItem(this.getKey(key));
    try {
      const value = cached ? JSON.parse(cached) : null;
      return value;
    } catch (e) {
      return null;
    }
  }

  public remove(key: string) {
    return localStorage.removeItem(this.getKey(key))
  }

  private cacheAsync(key: string, obs: Promise<any>, seconds = 1000) {
    if (!this.isExpired(key)) {
      const res = this.getCache(key);
      return res && res.data;
    }
    return obs.then((value) => {
      this.setCache(key, value, seconds);
      return value;
    });
  }

  private isCached(key: string) {
    return !!localStorage.getItem(this.getKey(key));
  }

  private isExpired(key: string) {
    const data = this.getCache(key);
    return !data || data.timeout <= dayjs().utc().valueOf();
  }

  private getKey(key: string) {
    return `${this.masterKey}_${key}`;
  }
}

export default new Cache(import.meta.env.LOCAL_CACHE_KEY as string);

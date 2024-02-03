export function Base<T>() {
  abstract class BaseModel {
    constructor(data = {}) {
      Object.assign(this, data);
    }
    static fromObject(data = {}): T {
      // @ts-expect-error: just needed
      const obj = new this(data);
      Object.assign(obj, data);
      return obj;
    }
    static fromArray(data: Array<any> = []) {
      return data.map((it) => this.fromObject(it));
    }
  }
  return BaseModel;
}

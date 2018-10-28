export default class MyStore implements InterfaceMyStore {
  private data: { [key: string]: any; };

  constructor(values: any = {}) {
    this.data = values;
  }

  setData(values: any = {}): void {
    this.data = {
      ...this.data,
      ...values,
    };
  }

  getAuthParams(): InterfaceAuthParams {
    const {
      accessKey,
      secretKey,
    } = this.data;

    return {
      accessKey,
      secretKey,
    };
  }

  getValues() {
    const {
      accessKey,
      secretKey,
      ...remains
    } = this.data;

    return remains;
  }
}

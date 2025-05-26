import { WebPlugin } from '@capacitor/core';

import type { DeviceInfo, DevicePlugin } from './definitions';

export class DeviceWeb extends WebPlugin implements DevicePlugin {
  async getInfo(): Promise<DeviceInfo> {
    throw this.unavailable('getInfo is not supported on web');
  }
}

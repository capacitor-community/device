import { WebPlugin } from '@capacitor/core';

import type { CommunityDeviceInfo, CommunityDevicePlugin } from './definitions';

export class CommunityDeviceWeb extends WebPlugin implements CommunityDevicePlugin {
  async getInfo(): Promise<CommunityDeviceInfo> {
    throw this.unavailable('getInfo is not supported on web');
  }
}

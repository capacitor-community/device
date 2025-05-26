import { WebPlugin } from '@capacitor/core';

import type { DevicePlugin } from './definitions';

export class DeviceWeb extends WebPlugin implements DevicePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

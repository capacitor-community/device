import { registerPlugin } from '@capacitor/core';

import type { CommunityDevicePlugin } from './definitions';

const CommunityDevice = registerPlugin<CommunityDevicePlugin>('CommunityDevice', {
  web: () => import('./web').then((m) => new m.CommunityDeviceWeb()),
});

export * from './definitions';
export { CommunityDevice };

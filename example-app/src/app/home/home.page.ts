import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonButton, IonToolbar, IonTitle, IonContent, IonButtons,
} from '@ionic/angular/standalone';

// NATIVE
import { Device, DeviceInfo } from '@capacitor-community/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    NgIf, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons
  ]
})
export class HomePage {

  public deviceInfo: DeviceInfo | undefined;

  constructor() { }

  public async showDeviceInfo(): Promise<void> {
    try {
      const info: DeviceInfo = await Device.getInfo();
      console.log('info', info);
      this.deviceInfo = info;
    } catch (error) {
      console.error('Error getting device info:', error);
      this.deviceInfo = undefined;
    }
  };

}

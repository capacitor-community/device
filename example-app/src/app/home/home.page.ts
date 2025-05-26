import { Component } from '@angular/core';
import {
  IonHeader, IonButton, IonToolbar, IonTitle, IonContent, IonButtons,
} from '@ionic/angular/standalone';

// NATIVE
import { Device } from '@capacitor-community/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons
  ]
})
export class HomePage {

  constructor() { }

  public async echo(): Promise<void> {
    const { value } = await Device.echo({ value: "test" });
    console.log('Device.echo result', value);
  }

  // public async checkPinStatus(): Promise<void> {
  //   const { value } = await DeviceSecurityDetect.pinCheck();
  //   if (value) {
  //     console.log('A secure lock mechanism is enabled on the device.');
  //   } else {
  //     console.warn('No secure lock mechanism is detected.');
  //   }
  // }
}

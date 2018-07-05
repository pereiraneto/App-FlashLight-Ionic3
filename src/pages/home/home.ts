import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn: boolean;

  constructor(private flashlight: Flashlight, private platform: Platform) {
    this.platform.ready().then(()=> {
      this.updateFlashlightStatus();
    });
  }

  switchOn(){
    this.flashlight.switchOn();
    this.updateFlashlightStatus();
  }

  switchOff(){
    this.flashlight.switchOff();
    this.updateFlashlightStatus();
  }

  toggle(){
    this.flashlight.toggle();
    this.updateFlashlightStatus();
  }

  updateFlashlightStatus(){
    this.isOn = this.flashlight.isSwitchedOn();
  }
}

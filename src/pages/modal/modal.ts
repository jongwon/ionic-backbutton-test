import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { BackableModal } from '../BackableModal';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage extends BackableModal {

    constructor(
        public viewCtrl: ViewController,
        public navCtrl: NavController, 
        public navParams: NavParams,
        public platform: Platform
    ) {
        super(viewCtrl, platform);
    }

    ionViewDidLoad() {
        
    }

    close(){
        this.viewCtrl.dismiss();
    }

    ionViewWillEnter(){
        this.enter();
    }

    ionViewDidLeave(){
        this.leave();
    }

}

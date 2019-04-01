import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { BackableModal } from '../BackableModal';


@IonicPage()
@Component({
  selector: 'page-main-modal',
  templateUrl: 'main-modal.html',
})
export class MainModalPage extends BackableModal {

    constructor(
        public viewCtrl: ViewController,
        public navCtrl: NavController, 
        public navParams: NavParams,
        public platform: Platform
    ) {
        super(viewCtrl, platform);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MainModalPage');
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

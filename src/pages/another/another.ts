import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-another',
  templateUrl: 'another.html',
})
export class AnotherPage {

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public event: Events,
        public platform: Platform
    ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AnotherPage');
    }

    backAction: Function;
    ionViewWillEnter(){
        this.backAction =  this.platform.registerBackButtonAction(() => {
            this.event.publish('setRoot', 'TabsPage');
        },2)
    }
    ionViewDidLeave(){
        this.backAction();
    }


}

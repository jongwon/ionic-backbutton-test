import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { BackablePage } from '../BackablePage';


@IonicPage()
@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage extends BackablePage {

    

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
        super(navCtrl, platform);
    }

    ionViewWillEnter(){
        this.enter();
    }
    ionViewDidLeave(){
        this.leave();
    }


    goThirdPage(){
        this.navCtrl.push('ThirdPage');
    }

}

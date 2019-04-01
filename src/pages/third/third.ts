import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, ModalController, Alert, Modal } from 'ionic-angular';
import { BackablePage } from '../BackablePage';

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage extends BackablePage{

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public platform: Platform
    ) {
        super(navCtrl, platform);
    }

    checkBeforeBackAction(){
        if(this.alert){
            this.alert.dismiss();
            return true;
        }
        if(this.modal){
            this.modal.dismiss();
            return true;
        }
        return false;
    }

    ionViewWillEnter(){
        this.enter();
    }

    ionViewDidLeave(){
        this.leave();
    }

    alert: Alert;
    pageAlert(){
        this.alert = this.alertCtrl.create({
            title: '경고 테스트 ', 
            message: '경고 창을 띄운 것입니다. 백키를 누르면 내려가야 합니다.', 
            buttons: [
                {
                    text: '취소',
                    role: 'cancel'
                }
            ]
        });
        this.alert.onDidDismiss(()=>{
            if(this.alert) this.alert = null;
        })
        this.alert.present();
    }
    
    modal: Modal;
    pageModal(){
        this.modal = this.modalCtrl.create('ModalPage');
        this.modal.onDidDismiss(()=>{
            if(this.modal) this.modal = null;
        })
        this.modal.present();
    }
}

import { Component, ViewChild } from '@angular/core';
import {IonicPage, Tabs, NavController, NavParams, Platform, AlertController, ToastController} from 'ionic-angular';

@IonicPage({
    segment: 'page-tabs',
    priority: 'high'    // 먼저 봐야 할 페이지 우선 순위
})
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    @ViewChild('tabs') tabRef: Tabs;

    
    tab1Root = "HomePage";
    tab2Root = "AboutPage";
    tab3Root = "ContactPage";


    constructor(
        public navCtrl: NavController,
        public platform: Platform,
        public alertCtrl : AlertController,
        public toastCtrl: ToastController,
        public navParams: NavParams
    ) {
        
    }

    backAction: Function;
    exitShown: boolean = false;

    ionViewWillEnter(){
        this.backAction =  this.platform.registerBackButtonAction(() => {
            if(this.tabRef.getSelected().index == 0){
                if(!this.exitShown){
                    this.confirmExit();
                }else{
                    this.platform.exitApp();
                }
            }else{
                this.tabRef.select(0);
            }
        },1)
    }

    ionViewDidLeave(){
        this.backAction();
    }

    confirmExit(){
        this.exitShown = true;
        let toast = this.toastCtrl.create({
            duration: 4000,
            message: '뒤로가기 버튼을 한번 더 누르면 앱이 종료됩니다.',
            showCloseButton: true
        });
        toast.onWillDismiss(()=>{
            this.exitShown = false;
        });
        toast.present();
    }
    
}

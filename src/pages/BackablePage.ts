import { NavController, Platform } from "ionic-angular";

export abstract class BackablePage {

    backAction: Function;

    constructor(
        public navCtrl: NavController, 
        public platform: Platform
    ){

    }

    checkBeforeBackAction(){
        return false;
    }

    enter(){
        this.backAction =  this.platform.registerBackButtonAction(() => {
            if(this.checkBeforeBackAction()) return;
            this.navCtrl.pop();
            this.backAction();
        },2)
    }

    leave(){
        this.backAction();
    }
}
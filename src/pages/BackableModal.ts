import { Platform, ViewController } from "ionic-angular";

export abstract class BackableModal {    

    constructor(
        public viewCtrl: ViewController,
        public platform: Platform
    ){

    }

    backAction: Function;
    enter(){
        this.backAction =  this.platform.registerBackButtonAction(() => {
            this.viewCtrl.dismiss();
        },2)
    }
    leave(){
        this.backAction();
    }

}
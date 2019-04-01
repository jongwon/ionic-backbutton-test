import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ModalController, ToastController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

	rootPage:any = "TabsPage";

	public alertShown: boolean = false;

	@ViewChild(Nav) public nav: Nav;

	constructor(
		public platform: Platform, 
		public statusBar: StatusBar, 
		private menu: MenuController,
		public splashScreen: SplashScreen,
		public modalCtrl: ModalController,
		public events: Events,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController
	) {
		platform.ready().then(() => {

			statusBar.styleDefault();
			splashScreen.hide();

			// platform.registerBackButtonAction(()=>{
			// 	if(this.nav.canGoBack()){
            //         this.nav.pop();
            //     }else{
            //         if(this.alertShown == false){
            //             this.confirmExit();
            //         }
            //     }
			// }, 0)

		});

		events.subscribe('setRoot', (page)=>{
			this.rootPage = page;
		})
	}

	ionViewWillUnload() {
        if (this.events) {
            this.events.unsubscribe('setROot')
        }
    }



	backAction: Function;
	ionMenuOepn(){
		// this.toastCtrl.create({duration: 1000, message:'open menu'}).present();
		this.backAction =  this.platform.registerBackButtonAction(() => {
			this.menu.close();
            this.backAction();
        },2)
	}

	ionMenuClose(){
		// this.toastCtrl.create({duration: 1000, message:'open close'}).present();
		this.backAction();
	}

	openTabMain(){
		this.rootPage = 'TabsPage';
	}

	openAnotherPage(){
		this.rootPage = 'AnotherPage';
	}

	openErrorReportPage(){
		this.rootPage = 'ErrorReportPage';
	}

	openMainModalPage(){
		this.modalCtrl.create('MainModalPage').present();
	}


}

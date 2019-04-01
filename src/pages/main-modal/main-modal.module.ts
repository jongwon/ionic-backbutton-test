import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainModalPage } from './main-modal';

@NgModule({
  declarations: [
    MainModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MainModalPage),
  ],
})
export class MainModalPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrorReportPage } from './error-report';

@NgModule({
  declarations: [
    ErrorReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ErrorReportPage),
  ],
})
export class ErrorReportPageModule {}

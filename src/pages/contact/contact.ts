import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage({
    segment: 'contact-page'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

}

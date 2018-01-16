import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }
  gotoDatabase() {
    this.navCtrl.push('DatabasePage')
  }
  gotoMarket() {
    this.navCtrl.push('MarketDemandPage')
  }
}

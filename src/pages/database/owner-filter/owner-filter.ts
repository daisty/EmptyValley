import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DATABASE } from '../../../config/config';
import { HttpService } from '../../../providers/Http.service';


@IonicPage()
@Component({
  selector: 'page-owner-filter',
  templateUrl: 'owner-filter.html',
})
export class OwnerFilterPage {
  paramObj: any = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
    public alertCtrl: AlertController,
  ) {
  }
  reset() {
    this.paramObj = {
      customer_name: '',
      important_level: '',
      customer_status: '',
      region: '',
      identity_prove: false,
    }
  }

  ionViewDidLoad() {
  }
  submit() {
    this.paramObj.identity_prove = this.paramObj.identity_prove ? '1' : '0';
    this.http.post(DATABASE + 'customer/index/ownerScreen', this.paramObj)
      .then(res => {
        let msg: string;
        if (res.code == 200) {
          msg = `${res.msg}`;
        } else {
          msg = `筛选失败:${res.msg}`;
        }
        let confirm = this.alertCtrl.create({
          title: '消息提示',
          message: msg,
          buttons: [
            {
              text: '确认',
              handler: () => {
                if (res.code) {
                  this.navCtrl.push('DatabasePage', { tab: true, value2: res.data});
                }
              }
            }
          ]
        });
        confirm.present();
      })
  }
}

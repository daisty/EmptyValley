import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DATABASE } from '../../../config/config';
import { HttpService } from '../../../providers/Http.service';

@IonicPage()
@Component({
  selector: 'page-station-filter',
  templateUrl: 'station-filter.html',
})
export class StationFilterPage {
  paramObj: any = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
    public alertCtrl: AlertController, ) {
  }
  reset() {
    this.paramObj = {
      site_type: '',
      site_region: '',
      whether_contact: false,
    }
  }
  ionViewDidLoad() {
  }
  submit() {
    this.paramObj.whether_contact = this.paramObj.whether_contact ? '1' : '0';
    this.http.post(DATABASE + 'customer/index/siteScreen', this.paramObj)
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
                  this.navCtrl.push('DatabasePage', { tab: true, value4: res.data });
                }
              }
            }
          ]
        });
        confirm.present();
      })
  }

}

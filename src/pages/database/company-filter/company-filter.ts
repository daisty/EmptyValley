import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DATABASE } from '../../../config/config';
import { HttpService } from '../../../providers/Http.service';


@IonicPage()
@Component({
  selector: 'page-company-filter',
  templateUrl: 'company-filter.html',
})
export class CompanyFilterPage {
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
      company_name: '',
      company_type: '',
      address: '',
    }
  }
  ionViewDidLoad() {
  }
  submit() {
    this.http.post(DATABASE + 'customer/index/comanyScreen', this.paramObj)
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
                  this.navCtrl.push('DatabasePage', { tab: true, value3: res.data });
                }
              }
            }
          ]
        });
        confirm.present();
      })
  }
}

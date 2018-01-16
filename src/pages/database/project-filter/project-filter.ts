import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DATABASE } from '../../../config/config';
import { HttpService } from '../../../providers/Http.service';

@IonicPage()
@Component({
  selector: 'page-project-filter',
  templateUrl: 'project-filter.html',
})
export class ProjectFilterPage {
  paramObj: any = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
    public alertCtrl: AlertController,
  ) {
  }

  ionViewDidLoad() {
  }
  reset() {
    this.paramObj = {
      project_name: '',
      project_type: '',
      party_a_company: '',
      bid_company: '',
      owner_customer: '',
      bid_contract: false,
      owner_contract: false,
      party_a_owner_contract: false,
    }
  }
  submit() {
    this.paramObj.bid_contract = this.paramObj.bid_contract ? '1' : '0';
    this.paramObj.owner_contract = this.paramObj.owner_contract ? '1' : '0';
    this.paramObj.party_a_owner_contract = this.paramObj.party_a_owner_contract ? '1' : '0';
    this.http.post(DATABASE + 'customer/index/projectScreen', this.paramObj)
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
                  this.navCtrl.push('DatabasePage', { tab: true, value: res.data });
                }
              }
            }
          ]
        });
        confirm.present();
      })
  }
}

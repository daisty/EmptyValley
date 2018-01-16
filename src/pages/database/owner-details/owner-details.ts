import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/Http.service';
import { DATABASE } from '../../../config/config';


@IonicPage()
@Component({
  selector: 'page-owner-details',
  templateUrl: 'owner-details.html',
})
export class OwnerDetailsPage {
  id: string;
  token: string;
  detailsList: any = {};
  prefix: any = 'http://wl.bjike.com';
  // prefix:any='http://192.168.0.93:8080';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService) {
    this.id = this.navParams.get('id');
    this.token = this.navParams.get('token');
    this.http.get(DATABASE + `customer/index/ownerInfo?id=${this.id}&token=${this.token}`)
      .then(res => {
        if (res.code) {
          this.detailsList = res.data;
          this.detailsList.prove_url = JSON.parse(res.data.prove_url);
        } else {
          this.http.presentToast(res.msg);
        }
      }).catch(() => {
        this.http.presentToast('服务器错误,请联系管理员');
      })
  }

  ionViewDidLoad() {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/Http.service';
import { DATABASE } from '../../../config/config';
import { PhotoViewer } from '@ionic-native/photo-viewer';


@IonicPage()
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetailsPage {
  id: string;
  token: string;
  detailsList: any = {};
  prefix: any = 'http://wl.bjike.com';
  // prefix: any = 'http://192.168.0.93:8080';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
    public photoViewer: PhotoViewer,
  ) {
    this.id = navParams.get('id');
    this.token = navParams.get('token');
    this.http.get(DATABASE + `customer/index/projectInfo?id=${this.id}&token=${this.token}`)
      .then(res => {
        if (res.code) {
          this.detailsList = res.data;
        } else {
          this.http.presentToast(res.msg);
        }
      }).catch(() => {
        this.http.presentToast('服务器错误,请联系管理员');
      })

  }
  showBig(url: string) {
    this.photoViewer.show(url, '我的图片展示', { share: false });
  }
  ionViewDidLoad() {

  }
}

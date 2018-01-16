import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-file',
  templateUrl: 'my-file.html',
})
export class MyFilePage {
  document: string = "download";
  download: any = [
    { src: 'assets/imgs/userImage2.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动资料', time: '2017年10月25日', size: '10M' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动通信', time: '2017年10月25日', size: '100K' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信资料', time: '2017年10月25日', size: '209K' },];
  downloading: any = [
    { src: 'assets/imgs/userImage2.png', name: '移动通信动通信资料', time: '2017年10月25日', size: '20K' },
  ]
  upload: any = [
    { src: 'assets/imgs/userImage2.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动资料', time: '2017年10月25日', size: '10M' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动通信', time: '2017年10月25日', size: '100K' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信资料', time: '2017年10月25日', size: '209K' },];
  uploading: any = [
    { src: 'assets/imgs/userImage1.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage2.png', name: '移动通信动通信资料', time: '2017年10月25日', size: '20K' },
    { src: 'assets/imgs/userImage1.png', name: '移动通信资料', time: '2017年10月25日', size: '20K' },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../providers/Http.service';
import { GlobalData } from '../../providers/GlobalData';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  leave:boolean = false;
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public http : HttpService,
    public globalData :GlobalData,
    public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    
  }
  ionViewCanLeave():boolean {
    return this.leave? true : false;
  }
  login (name:string,pas: string) {
    let loader = this.loadingCtrl.create({
      content: "登录中..."
    });
    loader.present();
    this.http.getUser(`v1/login?account=${name}&password=${pas}`)
    .then(res => {
      this.leave = true;
      if(res.code == 0){
        localStorage.setItem('userName',name);
        localStorage.setItem('password',pas);
        this.storage.set('token',res.data);
        this.storage.get('token').then((val) => {
          this.globalData.token = val;
          localStorage.setItem('token',res.data);//持久保存在本地
          this.navCtrl.setRoot('TabsPage');
        })
      }else {
        let confirm = this.alertCtrl.create({
          title: '登录失败!!!',
          message: res.msg,
          buttons: [
              {
                text: '确认'
              }
            ]
          });
          confirm.present();
      }
      loader.dismiss();
    }).catch(err=> {
        this.leave = true;
        loader.dismiss();
        this.http.presentToast('服务器错误，请联系管理员');
    })
  }
  forget() {
    this.leave = true;
    this.navCtrl.push('ForgetPage'); 
  }
  register():void {
    this.leave = true;
    this.navCtrl.push('RegisterPage'); 
  }
}
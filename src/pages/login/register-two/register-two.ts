import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HttpService } from '../../../providers/Http.service';
import { USER_URL } from '../../../config/config';

@IonicPage()
@Component({
  selector: 'page-register-two',
  templateUrl: 'register-two.html',
})
export class RegisterTwoPage {
  msg:string;
  showmsg:boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http : HttpService,
    public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    this.showmsg = false;
  }
  
  comfirm(a:string,b:string) :void {
    if(a){
     let loading = this.loadingCtrl.create({
          content:'正在提交...'
      });
      loading.present();
      this.http.post(USER_URL + `v1/register`,{username:a,password:this.navParams.get('password'),rePassword:this.navParams.get('rePassword'),authCode:this.navParams.get('authCode')})
        .then((res)=> {
          loading.dismiss();
          if(res.code == 0){
            this.navCtrl.popToRoot();
          }else{
            this.msg = res.msg;
            this.showmsg = true;
          }
        })
   }
  }
}

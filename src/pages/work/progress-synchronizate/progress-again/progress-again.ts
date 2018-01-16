import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../../providers/Http.service';
import { PROGRESS } from '../../../../config/config';
// import { NativeService } from '../../../../providers/NativeService';

@IonicPage()
@Component({
  selector: 'page-progress-again',
  templateUrl: 'progress-again.html',
})
export class ProgressAgainPage {
  // paramObj: any = {};
  // userInfo: Array<string>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService
  ) {
    // this.paramObj.id = navParams.get('id');
  }


  ionViewDidLoad() {
        //获取执行人员
        // this.http.get(PROGRESS + 'tasknode/v1/allUsers')
        // .then(res => {
        //   this.userInfo = res.data;
        //   console.log(this.userInfo);
        // })
  }

  submit() {
    // this.paramObj.startTime = this.paramObj.startTime.replace(/\T/g, " ").replace(/\Z/g, "");
    // this.paramObj.endTime = this.paramObj.endTime.replace(/\T/g, " ").replace(/\Z/g, "");
    // this.paramObj.split = this.paramObj.split?'true':'false';
    // this.http.put(PROGRESS + 'tasknode/v1/phone/initiateAgain', this.paramObj)
    //   .then(res => {
    //     if (res.code == 0) this.navCtrl.push('TaskAssignmentPage');
    //     if(res.msg){ this.http.presentToast(res.msg);}
    //   }).catch(res => {
    //     this.http.presentToast(res.msg);
    //   });
  }
}

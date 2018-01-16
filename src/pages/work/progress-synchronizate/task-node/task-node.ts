import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import { PROGRESS, USER_URL } from '../../../../config/config';
import { HttpService } from '../../../../providers/Http.service';

@IonicPage()
@Component({
  selector: 'page-task-node',
  templateUrl: 'task-node.html',
})
export class TaskNode {
  show: boolean = false;
  imgsUrl: string = USER_URL + '/v1/titlePic/';
  issue: any;
  execution: any;
  userToken: string = localStorage.getItem('token');
  private pageInite: number = 1//分发任务分页
  private tab: boolean;
  private hideBtn: boolean = true;//控制上拉加载true为显示
  name: any;
  mind: boolean; //控制 加载数据瞬间 不能有上拉操作 
  curPage: string;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
    public alertCtrl: AlertController) {
    this.tab = navParams.get('tab');
    this.name = localStorage.getItem('userName');
  }

  ionViewDidLoad() {

    // this.http.get(PROGRESS + 'tasknode/v1/phone/initiate', { execute: this.name })
    //   .then(res => {
    //     this.issue = res.data;
    //   }).catch(res => {
    //     this.http.presentToast(res.msg);
    //   });
  }

  showDele() {
    let dele = this.alertCtrl.create({
      title: '温馨提示',
      message: '您确定要删除该节点么？',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('cancle click');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('ok click');
          }
        }
      ]
    });
    dele.present();
  }

  // 编辑
  goEdit(): void {
    this.navCtrl.push('ProgressAgainPage');
  }
  selectDetail(value: string, id: string) {
    if (value == 'NOTRECEIVE' || value == 'RECEIVE') {

    } else {
      this.navCtrl.push('AssignDetailPage', { id: id, value: value });
    }
  };


  //上拉加载
  // doInfinite(infiniteScroll) {
  //   if (this.mind) {
  //     setTimeout(() => {
  //       this.pageInite++
  //       let duty = this.curPage;
  //       if (duty == "distribution" && this.mind) {
  //         this.http.get(PROGRESS + 'tasknode/v1/phone/initiate', { execute: this.name, page: this.pageInite })
  //           .then(res => {
  //             this.hideBtn = false;
  //             infiniteScroll.complete();
  //             if (JSON.stringify(res.data) !== "{}" && res.data) {
  //               this.dataPush(res.data, this.issue);
  //             } else {
  //               this.hideBtn = false;
  //             }
  //           }).catch(res => {
  //             this.http.presentToast(res.msg);
  //           });
  //       }
  //     }, 500);
  //   }

  // }

  dataPush(arr1, arr2) {
    for (let i = 0, len = arr1.length; i < len; i++) {
      arr2.push(arr1[i]);
    }
  }
}

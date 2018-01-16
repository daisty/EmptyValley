import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  // 任务分配
  gotoTask() {
    this.navCtrl.push('TaskAssignmentPage');
  }

  // 进度同步
  goProgress() {
    this.navCtrl.push('ProgressSynchronizate');
  }
}

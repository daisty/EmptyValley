import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-market-demand',
  templateUrl: 'market-demand.html',
})
export class MarketDemandPage {
  demand: string = "company";//默认进入资料库的项目
  companyList:Array<{}> = [{},{},{}];//企业需求数组
  peopleList:Array<{}> = [{},{},{},{}];//业主需求数组
  stationList:Array<{}> = [{},{},{},{},{}];//站点需求数组

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  sysChanged() {//选择类型
    

  }
}

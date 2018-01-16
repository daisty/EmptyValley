import { Component ,ViewChild } from '@angular/core';
import { IonicPage ,Tabs } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;
  tab1Client = 'HomePage';
  tab2Client = 'MessagePage';
  tab3Client = 'WorkPage';
  tab4Client = 'ContactPage';
 

  constructor() {

  }
}

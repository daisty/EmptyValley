import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StationFilterPage } from './station-filter';

@NgModule({
  declarations: [
    StationFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(StationFilterPage),
  ],
})
export class StationFilterPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerFilterPage } from './owner-filter';

@NgModule({
  declarations: [
    OwnerFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerFilterPage),
  ],
})
export class OwnerFilterPageModule {}

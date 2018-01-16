import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyFilterPage } from './company-filter';

@NgModule({
  declarations: [
    CompanyFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyFilterPage),
  ],
})
export class CompanyFilterPageModule {}

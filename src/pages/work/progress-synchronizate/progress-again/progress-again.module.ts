import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressAgainPage } from './progress-again';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    ProgressAgainPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressAgainPage),
    SharedModule
  ],
  exports: [
    ProgressAgainPage
  ],
  providers: []
})
export class ProgressAgainPageModule {}

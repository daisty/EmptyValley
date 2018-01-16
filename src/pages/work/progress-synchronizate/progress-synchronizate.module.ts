import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressSynchronizate } from './progress-synchronizate';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    ProgressSynchronizate,
  ],
  imports: [
    IonicPageModule.forChild(ProgressSynchronizate),
    SharedModule
  ],
  exports: [
    ProgressSynchronizate
  ]
})
export class ProgressSynchronizateModule {}

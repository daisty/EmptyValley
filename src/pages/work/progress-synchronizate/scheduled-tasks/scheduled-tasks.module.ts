import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduledTasks } from './scheduled-tasks';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    ScheduledTasks,
  ],
  imports: [
    IonicPageModule.forChild(ScheduledTasks),
    SharedModule
  ],
  exports: [
    ScheduledTasks
  ]
})
export class ScheduledTasksModule {}

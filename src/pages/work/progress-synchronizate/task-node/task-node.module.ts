import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskNode } from './task-node';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    TaskNode,
  ],
  imports: [
    IonicPageModule.forChild(TaskNode),
    SharedModule
  ],
  exports: [
    TaskNode
  ]
})
export class TaskNodeModule {}

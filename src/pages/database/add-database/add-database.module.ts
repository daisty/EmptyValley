import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDatabasePage } from './add-database';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    AddDatabasePage,
  ],
  imports: [
    IonicPageModule.forChild(AddDatabasePage),
    SharedModule,
  ],
})
export class AddDatabasePageModule {}

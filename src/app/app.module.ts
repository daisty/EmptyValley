import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Network } from "@ionic-native/network";
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalData } from "../providers/GlobalData";
import { PROVIDERS } from './imports';

import { Camera } from '@ionic-native/camera';//获取摄像头
import { ImagePicker } from '@ionic-native/image-picker';//获取图片
import { PhotoViewer } from '@ionic-native/photo-viewer';//全屏显示图像
import { FileChooser } from '@ionic-native/file-chooser';//选择手机文件
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
// import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonText: '',
      cancelButton: ' 取消'
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    GlobalData,
    SplashScreen,
    InAppBrowser,
    Network,
    PROVIDERS,
    ImagePicker,
    Camera,
    PhotoViewer,
    FileChooser,
    FileTransfer,
    FileTransferObject,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

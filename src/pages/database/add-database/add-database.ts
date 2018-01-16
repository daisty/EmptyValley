import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { HttpService } from '../../../providers/Http.service';
import { ImagePicker } from '@ionic-native/image-picker';//获取图片
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { DATABASE } from '../../../config/config';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-add-database',
  templateUrl: 'add-database.html',
})
export class AddDatabasePage {
  type: any = "项目信息表";
  paramObj: any = {
    site: false,
    entrance: false,
    complete: false,
    dredge: false,
    singleVerify: false,
    firstVerify: false,
    endVerify: false,
    identity: false,
  };
  addProject: any = {
    whether_bid_contract: false,
    whether_owner_contract: false,
    whether_party_a_bid_contract: false,
    whether_party_a_owner_contract: false,
  };//添加项目

  addCompany: any = {
    contacts_sex: false,
  }//添加企业客户

  addOwner: any = {
    customer_sex: false,
    identity_prove: false,
  }//添加业主客户

  addStation: any = {
    whether_address: false,
    whether_admission: false,
    whether_finished: false,
    whether_open: false,
    whether_verification: false,
    whether_start_verification: false,
    whether_end_verification: false,
    company_special: false,
    contact_sex: false,
  }//添加站点

  Iamges: any = [
    { id: '1', url: 'assets/imgs/addImage.png' },
    { id: '2', url: 'assets/imgs/addImage.png' },
    { id: '3', url: 'assets/imgs/addImage.png' },
    { id: '4', url: 'assets/imgs/addImage.png' },
  ];
  test: any = '123';
  fileName = '';
  photoP: any;//甲方与中标单位的合同
  photoO: any;//与业主的合同
  photoC: any;//与中标单位的合同
  photoS: any;//甲方与业主的合同
  provePhoto: any = [];//业主上传的证明图
  prefix: any = 'http://wl.bjike.com';
  // prefix: any = 'http://192.168.0.93:8080';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public http: HttpService,
    public alertCtrl: AlertController,
    public photoViewer: PhotoViewer,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
  ) {
  }

  ionViewDidLoad() {
  }

  delImage(photo: any): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: '是否删除附件',
      buttons: [
        {
          text: '确认删除',
          handler: () => {
            if (photo == 'photo1') {
              this.photoP = '';
            } else if (photo == 'photo2') {
              this.photoO = '';
            } else if (photo == 'photo3') {
              this.photoC = '';
            } else if (photo == 'photo4') {
              this.photoS = '';
            } else {
              this.http.presentToast('删除无效')
            }
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    })
    actionSheet.present();
  }

  //上传文件
  chooserFile(photo) {
    this.fileChooser.open()
      .then(uri => {
        const fileTransfer: FileTransferObject = this.transfer.create();
        let fileType = uri.substring(uri.lastIndexOf('.') + 1);
        let fileN = uri.substring(uri.lastIndexOf('/') + 1);
        let mimeT: string = '';
        switch (fileType) {
          case 'txt':
            mimeT = 'text/plain';
            break;
          case 'docx':
            mimeT = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;
          case 'doc':
            mimeT = 'application/msword';
            break;
          case 'pptx':
            mimeT = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
            break;
          case 'ppt':
            mimeT = 'application/vnd.ms-powerpoint';
            break;
          case 'xlsx':
            mimeT = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            break;
          case 'xls':
            mimeT = 'application/vnd.ms-excel';
            break;
          case 'zip':
            mimeT = 'application/x-zip-compressed';
            break;
          case 'rar':
            mimeT = 'application/octet-stream';
            break;
          case 'pdf':
            mimeT = 'application/pdf';
            break;
          case 'jpg':
            mimeT = 'image/jpeg';
            break;
          case 'png':
            mimeT = 'image/png';
            break;
          default:
            mimeT = 'application/' + fileType;
            break;
        }
        let options = {
          fileKey: 'file',
          fileName: fileN,
          chunkedMode: false
        }
        fileTransfer.upload(encodeURI(uri), DATABASE + 'customer/index/addFile', options)
          .then((res: any) => {
            if (JSON.parse(res.response).code == 200) {
              if (photo == 'photo1') {
                this.photoP = JSON.parse(res.response).data;
              } else if (photo == 'photo2') {
                this.photoO = JSON.parse(res.response).data;
              } else if (photo == 'photo3') {
                this.photoC = JSON.parse(res.response).data;
              } else if (photo == 'photo4') {
                this.photoS = JSON.parse(res.response).data;
              } else {
                this.http.presentToast('上传文件错误')
              }
            } else {
              this.http.presentToast('上传失败');
            }
          }, (err) => {
            this.http.presentToast(err);
          })
      })
      .catch(e => {
        this.http.presentToast(e);
      });
  }

  //业主上传证明
  addProve() {
    this.fileChooser.open()
      .then(uri => {
        const fileTransfer: FileTransferObject = this.transfer.create();
        let fileType = uri.substring(uri.lastIndexOf('.') + 1);
        let fileN = uri.substring(uri.lastIndexOf('/') + 1);
        let mimeT: string = '';
        switch (fileType) {
          case 'txt':
            mimeT = 'text/plain';
            break;
          case 'docx':
            mimeT = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;
          case 'doc':
            mimeT = 'application/msword';
            break;
          case 'pptx':
            mimeT = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
            break;
          case 'ppt':
            mimeT = 'application/vnd.ms-powerpoint';
            break;
          case 'xlsx':
            mimeT = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            break;
          case 'xls':
            mimeT = 'application/vnd.ms-excel';
            break;
          case 'zip':
            mimeT = 'application/x-zip-compressed';
            break;
          case 'rar':
            mimeT = 'application/octet-stream';
            break;
          case 'pdf':
            mimeT = 'application/pdf';
            break;
          case 'jpg':
            mimeT = 'image/jpeg';
            break;
          case 'png':
            mimeT = 'image/png';
            break;
          default:
            mimeT = 'application/' + fileType;
            break;
        }
        let options = {
          fileKey: 'file',
          fileName: fileN,
          chunkedMode: false
        }
        fileTransfer.upload(encodeURI(uri), DATABASE + 'customer/index/addFile', options)
          .then((res: any) => {
            if (JSON.parse(res.response).code == 200) {
              this.provePhoto.push(JSON.parse(res.response).data);
            } else {
              this.http.presentToast('上传失败');
            }
          }, (err) => {
            this.http.presentToast(err);
          })
      })
      .catch(e => {
        this.http.presentToast(e);
      });
  }
  delProve(val: number): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: '是否删除附件',
      buttons: [
        {
          text: '确认删除',
          handler: () => {
            this.provePhoto.splice(val, 1);
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    })
    actionSheet.present();
  }
  submit(type): void {
    if (type == '项目信息表') {
      this.addProject.whether_party_a_bid_contract = this.addProject.whether_party_a_bid_contract ? '1' : '0';
      this.addProject.whether_bid_contract = this.addProject.whether_bid_contract ? '1' : '0';
      this.addProject.whether_owner_contract = this.addProject.whether_owner_contract ? '1' : '0';
      this.addProject.whether_party_a_owner_contract = this.addProject.whether_party_a_owner_contract ? '1' : '0';
      this.addProject.party_a_bid_contract_url = this.photoP;
      this.addProject.owner_contract_url = this.photoO;
      this.addProject.bid_contract_url = this.photoC;
      this.addProject.party_a_owner_contract_url = this.photoS;
      this.http.post(DATABASE + 'customer/index/addProject', this.addProject)
        .then(res => {
          let msg: string;
          if (res.code == 200) {
            msg = `${res.msg}`;
          } else {
            msg = `新增失败:${res.msg}`;
          }
          let confirm = this.alertCtrl.create({
            title: '消息提示',
            message: msg,
            buttons: [
              {
                text: '确认',
                handler: () => {
                  if (res.code) {
                    this.navCtrl.push('DatabasePage', { tab: true });
                  }
                }
              }
            ]
          });
          confirm.present();
        })
    } else if (type == '企业客户表') {
      this.addCompany.contacts_sex = this.addCompany.contacts_sex ? '女' : '男';
      this.http.post(DATABASE + 'customer/index/addBidCompany', this.addCompany)
        .then(res => {
          let msg: string;
          if (res.code == 200) {
            msg = `${res.msg}`;
          } else {
            msg = `新增失败:${res.msg}`;
          }
          let confirm = this.alertCtrl.create({
            title: '消息提示',
            message: msg,
            buttons: [
              {
                text: '确认',
                handler: () => {
                  if (res.code) {
                    this.navCtrl.push('DatabasePage', { tab: true });
                  }
                }
              }
            ]
          });
          confirm.present();
        })
    } else if (type == '站点表') {
      this.addStation.whether_address = this.addStation.whether_address ? '1' : '0';
      this.addStation.whether_admission = this.addStation.whether_admission ? '1' : '0';
      this.addStation.whether_finished = this.addStation.whether_finished ? '1' : '0';
      this.addStation.whether_open = this.addStation.whether_open ? '1' : '0';
      this.addStation.whether_verification = this.addStation.whether_verification ? '1' : '0';
      this.addStation.whether_start_verification = this.addStation.whether_start_verification ? '1' : '0';
      this.addStation.whether_end_verification = this.addStation.whether_end_verification ? '1' : '0';
      this.addStation.contact_sex = this.addStation.contact_sex ? '女' : '男';
      this.addStation.company_special = this.addStation.company_special ? '是' : '否';
      this.http.post(DATABASE + 'customer/index/addSite', this.addStation)
        .then(res => {
          let msg: string;
          if (res.code == 200) {
            msg = `${res.msg}`;
          } else {
            msg = `新增失败:${res.msg}`;
          }
          let confirm = this.alertCtrl.create({
            title: '消息提示',
            message: msg,
            buttons: [
              {
                text: '确认',
                handler: () => {
                  if (res.code) {
                    this.navCtrl.push('DatabasePage', { tab: true });
                  }
                }
              }]
          });
          confirm.present();
        })
    } else if (type = '业主客户表') {
      this.addOwner.customer_sex = this.addOwner.customer_sex ? '女' : '男';
      this.addOwner.identity_prove = this.addOwner.identity_prove ? '1' : '0';
      this.addOwner.prove_url = JSON.stringify(this.provePhoto);
      this.http.post(DATABASE + 'customer/index/addOwner', this.addOwner)
        .then(res => {
          let msg: string;
          if (res.code == 200) {
            msg = `${res.msg}`;
          } else {
            msg = `新增失败:${res.msg}`
          }
          let confirm = this.alertCtrl.create({
            title: '消息提示',
            message: msg,
            buttons: [{
              text: '确认',
              handler: () => {
                if (res.code) {
                  this.navCtrl.push('DatabasePage', { tab: true });
                }
              }
            }]
          });
          confirm.present();
        })
    } else {
      alert()
    }
  }

}

import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content, ModalController } from 'ionic-angular';
import { HttpService } from '../../providers/Http.service';
import { DATABASE } from '../../config/config';

@IonicPage()
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {
  database: string = "project";//默认进入资料库的项目
  index: string = 'A';//当前选中的字母
  showModal: boolean = false;
  timeout: any;
  projectContacts: Array<any> = [];//项目列表
  ownerContacts: Array<any> = [];
  companyContacts: Array<any> = [];//企业客户列表
  stationContacts: Array<any> = [];//站点列表
  filesContacts: Array<any> = [
    {
      groupName: 'A', it: [
        { id: '1', name: 'a1aaaa测试', image: 'assets/imgs/userImage1.png', size: '767M' },
        { id: '2', name: 'a2测试', image: 'assets/imgs/userImage2.png', size: '64M' },
        { id: '3', name: 'a3测试a测试a测试a测试a测试', image: 'assets/imgs/userImage1.png', size: '77M' },
        { id: '4', name: 'a4测试', image: 'assets/imgs/addImage.png', size: '64M' },
        { id: '5', name: 'a5测试', image: 'assets/imgs/userImage2.png', size: '77M' },
        { id: '6', name: 'a6测试', image: 'assets/imgs/userImage2.png', size: '73M' }]
    },
    {
      groupName: 'B', it: [
        { id: '7', name: 'bbb测试', image: 'assets/imgs/userImage2.png', size: '12M' },
        { id: '8', name: 'bbb测试', image: 'assets/imgs/userImage2.png', size: '83M' },
        { id: '9', name: 'bbvbb测试测试', image: 'assets/imgs/userImage1.png', size: '145M' },
        { id: '10', name: 'b测试', image: 'assets/imgs/userImage2.png', size: '153M' }]
    },
    {
      groupName: '#', it: [
        { id: '11', name: '#测试#测试#测试#测试', image: 'assets/imgs/userImage2.png', size: '23M' },
        { id: '12', name: '#测试#测试', image: 'assets/imgs/userImage1.png', size: '123M' },
        { id: '13', name: '#测试#测试#测试#测试#测试', image: 'assets/imgs/userImage1.png', size: '24M' },
        { id: '14', name: '#测试', image: 'assets/imgs/userImage2.png', size: '34M' },
        { id: '15', name: '#测试#测试#测试#测试', image: 'assets/imgs/userImage2.png', size: '23M' },
        { id: '16', name: '#测试#测试', image: 'assets/imgs/userImage1.png', size: '123M' },
        { id: '17', name: '#测试#测试#测试#测试#测试', image: 'assets/imgs/userImage1.png', size: '24M' },
        { id: '18', name: '#测试', image: 'assets/imgs/userImage2.png', size: '34M' },
        { id: '19', name: '#测试#测试#测试#测试', image: 'assets/imgs/userImage2.png', size: '23M' },
        { id: '20', name: '#测试#测试', image: 'assets/imgs/userImage1.png', size: '123M' },
        { id: '21', name: '#测试#测试#测试#测试#测试', image: 'assets/imgs/userImage1.png', size: '24M' },
        { id: '22', name: '#测试', image: 'assets/imgs/userImage2.png', size: '34M' }
      ]
    },
  ];


  itemss = [];
  alphabet: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');//右侧检索导航
  offsetTops: Array<number> = [];//每段字母距离顶部的距离
  isAndroid: boolean = false;//判断是否为Android环境
  items: any;
  arr1: Array<any> = [];//获取的项目列表中含有的字母
  arr2: Array<any> = [];//获取的业主列表中含有的字母
  arr3: Array<any> = [];//获取的企业列表中含有的字母
  arr4: Array<any> = [];//获取的站点列表中含有的字母
  arr5: Array<any> = [];//获取的文档列表中含有的字母
  newArr: Array<any> = [];//列表含有的字母与26个字母的对比后公共的字母（显示在右侧的字母）
  isShow = true;
  searchProject: Array<any> = [];
  searchCompany: Array<any> = [];
  searchSite: Array<any> = [];
  searchCustomer: Array<any> = [];
  searchContent: any = {};
  filterProject: Array<any> = [];
  filterCompany: Array<any> = [];
  filterSite: Array<any> = [];
  filterOwner: Array<any> = [];
  @ViewChildren('IonItemGroup1') ionItemGroup1;
  @ViewChild(Content) content: Content;

  constructor(platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public ref: ChangeDetectorRef,
    public http: HttpService,
    public modalCtrl: ModalController) {

    this.isAndroid = platform.is('android');
    for (var i = 0; i < 30; i++) {
      this.itemss.push(this.itemss.length);
    }
    this.filterProject = this.navParams.get('value');
    this.filterOwner = this.navParams.get('value2');
    this.filterCompany = this.navParams.get('value3');
    this.filterSite = this.navParams.get('value4');
  }
  ionViewDidLoad() { }

  filterAlphabet(arr) {
    this.newArr = [];
    for (var i = 0; i < this.alphabet.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (this.alphabet[i] == arr[j]) {
          this.newArr[j] = arr[j];
          break;
        }
      }
    }
  }

  ionViewDidEnter() {
    //获取资料库的项目
    if (this.filterProject !== undefined) {
      this.projectContacts = [];
      this.projectContacts = this.filterProject;
      this.filterProject = []
    } else {
      this.projectContacts = [];
      this.http.get(DATABASE + 'customer/index/appProjectList')
        .then(res => {
          if (res.code) {
            this.projectContacts = res.data;
            for (var i = 0; i < this.projectContacts.length; i++) {
              this.arr1[i] = this.projectContacts[i].letter;
            }
          } else {
            this.http.presentToast(res.msg);
          }
        }).catch(() => {
          this.http.presentToast('服务器错误,请联系管理员');
        })
    }
    //获取资料库的业主
    if (this.filterOwner !== undefined) {
      this.ownerContacts = [];
      this.ownerContacts = this.filterOwner;
      this.filterOwner = []
    } else {
      this.ownerContacts = [];
      this.http.get(DATABASE + 'customer/index/appOwnerList')
        .then(res => {
          if (res.code) {
            this.ownerContacts = res.data;
            for (var i = 0; i < this.ownerContacts.length; i++) {
              this.arr2[i] = this.ownerContacts[i].letter;
            }
          } else {
            this.http.presentToast(res.msg);
          }
        }).catch(() => {
          this.http.presentToast('服务器错误,请联系管理员');
        })
    }

    //获取资料库的企业客户
    if (this.filterCompany !== undefined) {
      this.companyContacts = [];
      this.companyContacts = this.filterCompany;
      this.filterCompany = []
    } else {
      this.companyContacts = [];
      this.http.get(DATABASE + 'customer/index/appBidCompanyList')
        .then(res => {
          if (res.code) {
            this.companyContacts = res.data;
            for (var i = 0; i < this.companyContacts.length; i++) {
              this.arr3[i] = this.companyContacts[i].letter;
            }
          } else {
            this.http.presentToast(res.msg);
          }
        }).catch(() => {
          this.http.presentToast('服务器错误,请联系管理员');
        })
    }

    //获取资料库的站点
    if (this.filterSite !== undefined) {
      this.stationContacts = [];
      this.stationContacts = this.filterSite;
      this.filterSite = []
    } else {
      this.stationContacts = [];
      this.http.get(DATABASE + 'customer/index/appSiteList')
        .then(res => {
          if (res.code) {
            this.stationContacts = res.data;
            for (var i = 0; i < this.stationContacts.length; i++) {
              this.arr4[i] = this.stationContacts[i].letter;
            }
          } else {
            this.http.presentToast(res.msg);
          }
        }).catch(() => {
          this.http.presentToast('服务器错误,请联系管理员');
        })
    }

    this.getOffsetTops();
    this.filterAlphabet(this.arr1);
  }

  sysChanged() {//选择类型
    this.content.scrollTo(0, 0, 0);
    this.index = "A";
    this.getOffsetTops();
  }

  transform(value: any) {
    let result: any;
    switch (value) {
      case "project":
        result = this.arr1;
        break;
      case "owner":
        result = this.arr2;
        break;
      case "company":
        result = this.arr3;
        break;
      case "station":
        result = this.arr4;
        break;
      case "files":
        result = this.arr5;
        break;
      default:
        result = this.arr1;
        break;
    }
    return result;
  }

  //每个字母距离顶部的距离
  getOffsetTops() {
    setTimeout(() => {
      this.filterAlphabet(this.transform(this.database));
      this.offsetTops = this.ionItemGroup1._results.map(ele => {
        return ele.nativeElement.offsetTop
      })
    }, 0)
  }

  selectIndex(index: number) {
    this.index = this.newArr[index];//获取选中字母
    const offsetTop = this.offsetTops[index];//获取选中字母距离顶部距离
    this.content.scrollTo(0, offsetTop, 300);//滑动到对应的位置
    this.createModal();
  }

  createModal() {
    clearTimeout(this.timeout);
    this.showModal = true;
    this.timeout = setTimeout(() => {
      this.showModal = false;
      this.ref.detectChanges();
    }, 800)
  }

  onScroll() {
    const threshold = 42;//字母标题的高度
    if (this.content.scrollTop < threshold) {
      this.index = this.newArr[0];
      return;
    }
    for (let i = this.offsetTops.length; i > 0; i--) {
      if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
        this.index = this.newArr[i];
        this.ref.detectChanges();//手动监测变化
        return;
      }
    }
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.itemss.push(this.itemss.length);
      }
      infiniteScroll.complete();
    }, 500);
  }

  //筛选
  gotoFilter(database) {
    if (database == 'project') {
      this.navCtrl.push('ProjectFilterPage');
    } else if (database == 'owner') {
      this.navCtrl.push('OwnerFilterPage');
    } else if (database == 'company') {
      this.navCtrl.push('CompanyFilterPage');
    } else if (database == 'station') {
      this.navCtrl.push('StationFilterPage');
    }

  }
  //新建项目
  addProject() {
    this.navCtrl.push('AddDatabasePage');
  }
  //查看项目详情
  gotoProject(id: string, token: string) {
    this.navCtrl.push('ProjectDetailsPage', { id: id, token: token });
  }
  //查看业主客户详情
  gotoOwner(id: string, token: string) {
    this.navCtrl.push('OwnerDetailsPage', { id: id, token: token });
  }
  //查看企业客户详情
  gotoCompany(id: string, token: string) {
    this.navCtrl.push('CompanyDetailsPage', { id: id, token: token });
  }
  //查看站点详情
  gotoStation(id: string, token: string) {
    this.navCtrl.push('StationDetailsPage', { id: id, token: token });
  }
  //我的文档
  gotoFiles() {
    this.navCtrl.push('MyFilePage')
  }
  //删除文件的列表内容
  delete(item, a) {
    for (let i = 0; i < item.it.length; i++) {
      if (item.it[i].id == a.id) {
        item.it.splice(i, 1)
      }
    }
  }

  hideShow() {
    this.isShow = false;
  }
  onCancelSearch() {
    this.isShow = true;
  };

  //通过搜索获取列表
  getItems(ev) {
    this.searchContent = {};
    var val = ev.target.value;
    var type = 5;
    if (val && val.trim() != '') {
      this.http.get(DATABASE + 'customer/index/screenProject', { content: val, type: type })
        .then(res => {
          this.searchContent = res.data;
          this.searchProject = res.data.project;
          this.searchCompany = res.data.company;
          this.searchSite = res.data.site;
          this.searchCustomer = res.data.customer;
        })
    }
  }

  //搜索结果----------点击进入详情
  searchResult(id, token, type) {
    if (type == '1') {
      this.navCtrl.push('ProjectDetailsPage', { id: id, token: token });
    } else if (type == '2') {
      this.navCtrl.push('CompanyDetailsPage', { id: id, token: token });
    } else if (type == '3') {
      this.navCtrl.push('StationDetailsPage', { id: id, token: token });
    } else if (type == '4') {
      this.navCtrl.push('OwnerDetailsPage', { id: id, token: token });
    } else {
      alert('操作有误。')
    }
  }

}

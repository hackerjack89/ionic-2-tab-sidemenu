import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabonePage } from '../tabone/tabone';
import { TabtwoPage } from '../tabtwo/tabtwo';
import {TabthreePage} from '../tabthree/tabthree';
/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  private tab1root: any;
  private tab2root: any;
  private tab3root: any;
  constructor(private navCtrl: NavController) {
    this.tab1root = TabonePage;
    this.tab2root = TabtwoPage;
    this.tab3root = TabthreePage;
  }

}

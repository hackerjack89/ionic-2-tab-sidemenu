import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {TabsPage} from './pages/tabs/tabs';
import { HomePage } from './pages/home/home';
import { ContactPage } from './pages/contact/contact';
import { AboutPage } from './pages/about/about';

@Component({
  templateUrl: 'build/app.html',
})

export class MyApp {
  @ViewChild(Nav) nav : Nav;
  private rootPage: any;
  private pages: any[];

  constructor(public platform: Platform, private menu: MenuController) {
    this.menu = menu;
    this.pages = [
      {title: 'Home', component: HomePage },
      {title: 'Contact', component: ContactPage },
      {title: 'About', component: AboutPage }
    ];

    console.log(this.nav);
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    console.log("Menu closed");
    console.log("printing nav");
    console.log(this.nav);
    this.menu.close();
    this.nav.push(page.component);
  }
}

ionicBootstrap(MyApp);

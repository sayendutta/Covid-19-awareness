import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  name:any;
  phone:any;
  constructor(public navCtrl:NavController,public storage:Storage )
  {

    this.storage.get('name').then((val)=>{
      console.log("NAme:"+this.name);
      this.name=val;
    });
    this.storage.get('phone').then((val)=>{
      this.phone=val;
    });

  }
  logout()
  {
    this.storage.remove('name');
    this.storage.remove('phone');
    this.navCtrl.navigateRoot('/homescreen');
  }
}

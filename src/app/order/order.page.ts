import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  list:any=[];
  data:any={};
  payload:any={};
  total:number=0;
  constructor(public toast:ToastController,public navCtrl:NavController,private storage:Storage) {
  
    this.list=[
      {"product":"Egg","price":6,"id":"egg"},
      {"product":"Butter","price":46,"id":"butter"},
      {"product":"Milk","price":23,"id":"milk"},
      {"product":"Quatar Bread","price":8,"id":"quatar"},
      {"product":"Plain Half","price":13,"id":"plain"},
      {"product":"Brown Bread","price":27,"id":"brown"},
      {"product":"Size Half","price":13,"id":"size"},
      {"product":"Milky Half","price":14,"id":"milky"},
      {"product":"1 pound slice bread","price":25,"id":"pound"}
    ];

   }

  ngOnInit() {
  }
  display(val,prod,price)
  {
    prod=prod.toLowerCase();
    if(this.data[prod]!=undefined)
      if(this.data[prod]!=val)
        this.total-=parseInt(this.data[prod])*parseInt(price);
        this.data[prod]=val;
        this.total+=parseInt(val)*parseInt(price);
      this.payload.list=this.data;
      this.payload.total=this.total;
    this.presentToast(this.total);
    this.storage.set('payload',JSON.stringify(this.payload));

  }
  async presentToast(param) {
    const toast = await this.toast.create({
      message: 'Your current sub total is : ₹'+param,
      duration: 2000
    });
    toast.present();
  }
 goToDelivery()
 {

   this.navCtrl.navigateForward('/delivery');
 }
}

import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
total:any;
payload:any;
address:string='';
location:string='';
pincode:number=0;
delivery:any={};
phone:any;
response:any={};
  constructor(public storage: Storage,public toastController:ToastController,public loadingController:LoadingController,public navCtrl:NavController,public http:HttpClient) { 

this.storage.get('payload').then((val)=>
{
  this.payload=JSON.parse(val);
  this.total=this.payload.total;
});
this.storage.get('phone').then((val)=>
{

  this.phone=val;
});
this.storage.get('address').then((val)=>
{
if(val!=undefined || val!='')
  this.address=val;
});
this.storage.get('pincode').then((val)=>
{
if(val!=undefined || val!='')
  this.pincode=val;
});
this.storage.get('location').then((val)=>
{
if(val!=undefined || val!='')
  this.location=val;
});
  }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner:"crescent",
      duration: 10000
    });
    await loading.present();

  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  confirmDelivery()
  {
    this.delivery.list=this.payload.list;
    this.delivery.total=this.total;
    this.delivery.address=this.address;
    this.delivery.pincode=this.pincode;
    this.delivery.phone=this.phone;
    this.delivery.location=this.location;
    this.presentLoading();
     
    this.http.post('http://pkmneothunder.com/project_Delivery/order.php', JSON.stringify(this.delivery))
     
     .subscribe(data =>this.response=data,err => console.warn(err),
     () => {
       this.loadingController.dismiss();
     if(this.response['responsecode']=="Success")
     {
       this.storage.set('address',this.address);
       this.storage.set('pincode',this.pincode);
       this.storage.set('total',this.total);
       this.presentToast(this.response['responsemessage']);
       this.navCtrl.navigateForward('/payment');
     }
     else
     this.presentToast(this.response['responsemessage']);

 })
  }
}

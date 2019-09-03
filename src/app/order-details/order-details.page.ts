import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  response:any={};
  phone:any;
  data:any=[];
  payload:any={};
  constructor(private activatedRoute: ActivatedRoute, public storage: Storage,public toastController:ToastController,public loadingController:LoadingController,public navCtrl:NavController,public http:HttpClient)
  {
      this.presentLoading();
    this.activatedRoute.queryParams.subscribe(resp => {
    console.log("Hello+"+resp.id);
     this.fetchOrders(resp.id);
  });
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner:"crescent",
      duration: 10000
    });
    await loading.present();

  }
  ngOnInit()
  {
    //this.fetchTransactions();
  }

  fetchOrders(param)
  {
  
    this.payload.id=param;
    this.http.get('http://pkmneothunder.com/project_Delivery/order_fetch.php?id='+param)
     
     .subscribe(data =>this.response=data,err => console.warn(err),
     () => {
       this.loadingController.dismiss();
       this.data=this.response.data;
     if(this.response['responsecode']=="Success")
     {
      /* this.storage.set('address',this.address);
       this.storage.set('pincode',this.pincode);
       this.storage.set('total',this.total);
       this.presentToast(this.response['responsemessage']);*/
       //this.navCtrl.navigateForward('/payment');
       this.presentToast(this.response['responsemessage']);
     }
     else
     this.presentToast(this.response['responsemessage']);

 })

  }
}

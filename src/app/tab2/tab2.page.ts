import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  response:any={};
  phone:any;
  data:any;
  constructor(public storage: Storage,public toastController:ToastController,public loadingController:LoadingController,public navCtrl:NavController,public http:HttpClient,public router:Router)
  {
    
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
    this.fetchTransactions();
  }
  detailPage(param)
  {
    console.log("Order:"+param);
  // this.data.order=param;
    this.router.navigate(['/order-details'],{queryParams:{id:param}});
  }
  refresh()
  {
    this.fetchTransactions();
  }
  fetchTransactions()
  {
    //this.presentLoading();
    this.storage.get('phone').then((val)=>
        {

          this.phone=val;
  
    this.http.get('http://pkmneothunder.com/project_Delivery/order_list.php?id='+this.phone)
     
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
});
  }
}

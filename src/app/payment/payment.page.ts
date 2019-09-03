import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  total:any;
  address:any;
  pincode:any;
  constructor(private storage:Storage,public navCtrl:NavController) { 

    this.storage.get('total').then((val)=>{
      this.total=val;
    });
    this.storage.get('address').then((val)=>{
      this.address=val;
    });
    this.storage.get('pincode').then((val)=>{
      this.pincode=val;
    });
  }

  ngOnInit() {
  }
goToOrder()
{
  this.navCtrl.navigateBack('/tabs/tab1');
}
}

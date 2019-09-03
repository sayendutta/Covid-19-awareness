import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data:any={};
  response:any={};
  constructor(public router:Router,public menuCtrl:MenuController,public navCtrl:NavController,public toastController:ToastController,public loadingController:LoadingController,public http:HttpClient,private storage:Storage) {
this.data.customer_name='';
this.data.phone_no='';
this.data.customer_password='';
this.data.confirmpassword='';
this.ionViewWillEnter();
this.storage.get('phone_no').then((val)=>{
  this.data.phone_no=val;
  if(this.data.phone_no!=undefined)
    {
      this.presentLoading("Logging you in...",1000);
      //this.loadingController.dismiss();
    }
});
   }

   ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }
  ngOnInit()
  {

  }
  async presentLoading(msg,time) {
    const loading = await this.loadingController.create({
      message: msg,
      spinner:"crescent",
      duration: time
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
  submitLogin()
  {
    var tempPhone=this.data.phone_no.toString();

     if(tempPhone.length!=10)
    this.presentToast("Phone number seems incorrect. Please check again.");
    else if(this.data.customer_password.length<6)
    this.presentToast("Password should be of minimum of 6 characters");

    else
    {
      this.presentLoading("Verifying your details...",5000);
     
     this.http.post('https://mealkingfreeserver.000webhostapp.com/mealking/login_mealking.php', JSON.stringify(this.data))
      
      .subscribe(data =>this.response=data,err => console.warn(err),
      () => {
        this.loadingController.dismiss();
      if(this.response['responsecode']=="Success")
      {
        this.storage.set('phone',parseInt(this.data.phone_no));
        this.storage.set('name',this.response.name);
        console.log("Name"+this.response.name);
        this.presentToast(this.response['responsemessage']);
        this.navCtrl.navigateForward('/tabs/tab1');
      }
      else
      this.presentToast(this.response['responsemessage']);

  })

      //send data to table
    }
  }
 /* forgotPassword()
  {
  
    if(this.data.phone==null)
     this.presentToast("Enter the phone number in order to change password");
    var tempPhone=this.data.phone.toString();
    if(tempPhone.length!=10)
    this.presentToast("Phone number seems incorrect");
    else
    {
      this.presentLoading("Sending OTP....",5000);
    this.firebaseAuthentication.verifyPhoneNumber("+91"+tempPhone,0)
    .then((res:any) => {
//alert(JSON.stringify(res));
      this.loadingController.dismiss();
      this.presentToast("OTP has been successfully sent to "+tempPhone);
     this.router.navigate(['/forgotpassword'],{queryParams:{verificationId:res,data:this.data.phone}});
   }
 ).catch((error: any) => {alert(error);this.loadingController.dismiss();});;
  }
}*/
}

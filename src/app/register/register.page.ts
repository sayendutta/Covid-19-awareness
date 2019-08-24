import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  response:any={};
  data:any={};
  constructor(public menuCtrl: MenuController,public router:Router,public navCtrl:NavController,public toastController:ToastController,public http:HttpClient,public loadingController:LoadingController) { 
  this.data.customer_name='';
  this.data.phone_no='';
  this.data.customer_password='';
  this.data.confirmpassword='';
  this.data.email='';
}
  ngOnInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
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
  pushLogin()
  {
    this.navCtrl.navigateForward('/login');
  }
  submitReg()
  {
    var tempPhone=this.data.phone_no.toString();
  
     if(tempPhone.length!=10)
    this.presentToast("Phone number seems incorrect. Please check again.");
    else if(this.data.customer_password.length<6)
    this.presentToast("Password should be of minimum  6 characters");
    else if(this.data.customer_password!=this.data.confirmpassword)
    this.presentToast("Both passwords do not match. Please check again");
    else
    {
     /*this.presentLoading();
     /* Phone Number Verification code based on Firebase
    //alert("Entered");
     tempPhone="+91"+tempPhone;
     this.firebaseAuthentication.verifyPhoneNumber(tempPhone,0)
     .then((res:any) => {
//alert(JSON.stringify(res));
       this.loadingController.dismiss();
       this.presentToast("OTP has been successfully sent to "+tempPhone);
      this.router.navigate(['/otp'],{queryParams:{verificationId:res,data:JSON.stringify(this.data)}});
    }
  ).catch((error: any) => {alert(error);this.loadingController.dismiss();});;*/
    this.http.post('https://mealkingfreeserver.000webhostapp.com/mealking/mealking_register.php', JSON.stringify(this.data))
      
      .subscribe(data =>this.response=data,err => alert(JSON.stringify(err)),
      () => {
        //php file tai bhul ache t
        this.loadingController.dismiss();
      if(this.response['responsecode']=="Success")
      {
        this.presentToast(this.response['responsemessage']);
        this.navCtrl.navigateForward('/login');
      }
      else
      this.presentToast(this.response['responsemessage']);

  })

      //send data to table
    }
  }

}

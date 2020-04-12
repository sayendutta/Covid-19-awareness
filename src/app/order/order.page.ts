import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  data:any={};
  country:any=[];
  response:any;
  search:any;
  constructor(public toast:ToastController,public navCtrl:NavController,public http:HttpClient,private storage:Storage) {
  
   
   }

  ngOnInit() {
  }
  searchByCountry()
  {
    
    //alert("Entered")
    //ionic serve ki tor dadu korbe? Browser ta ki tor dadu amar dadu upore
    this.http.get('https://api.covid19api.com/summary').subscribe((data) =>this.response=data,(err) => console.warn(err),
    () =>{  
        
        this.country=this.response.Countries;
        //ey jayga tor dayitte tui kor , amar hoche na
        this.data=this.country.filter(record=>record.Country === this.search)
    /*     data=JSON.stringify(data);
        alert(data) */
        this.data=this.data[0]
    })
  }
}

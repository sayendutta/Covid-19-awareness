import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {


list:any={};


  constructor() { 
    this.list=[
      {"count":0},
      {"count":0},
      {"count":0},
      {"count":0},
      {"count":0}
    ];
  }

  ngOnInit() {
  }
  increase()
  {
    this.list.count=this.list.count+1;
  }
  decrease()
  {
    if(this.list.count!=0){
      this.list.count=this.list.count-1;
    }
  }
}

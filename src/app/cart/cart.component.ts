import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart:any[]=[]

  ngOnInit(): void {
    const temp = localStorage.getItem('cart')
    if(temp)
    this.cart = JSON.parse(temp);
  }

  remove(i:number){
    this.cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));

  }
  

}

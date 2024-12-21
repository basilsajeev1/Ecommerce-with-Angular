import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cart:any[]=[];count:number=0

  ngOnInit(){
    const temp = localStorage.getItem('cart')
    if(temp)
    this.cart = JSON.parse(temp);
    this.count = this.cart.length 
  }

}

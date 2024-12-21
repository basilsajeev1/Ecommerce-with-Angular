import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product:any;
  cart:any[]=[]

  constructor(private route: ActivatedRoute, private apiService:ApiService){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    const temp = localStorage.getItem('cart')
    if(temp)
    this.cart = JSON.parse(temp);

    this.apiService.getProductDetails(productIdFromRoute).subscribe(
      (response) => {
        this.product = response;
        
      }
    );
  }


  addToCart(product:any){
    this.cart.push(product)
    localStorage.setItem('cart', JSON.stringify(this.cart));
    window.alert('Your product has been added to the cart!');
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-wise',
  templateUrl: './category-wise.component.html',
  styleUrls: ['./category-wise.component.css']
})
export class CategoryWiseComponent implements OnInit{

  productList:any[]=[]
  category:any='';
  cart:any[]=[]
  constructor(private route: ActivatedRoute, private apiService:ApiService){

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.category = routeParams.get('category');
    const temp = localStorage.getItem('cart')
    if(temp)
    this.cart = JSON.parse(temp);

    this.apiService.getProductsByCategory(this.category).subscribe(
      (response) => {
        this.productList = response;
        
      }
    );
  }

  addToCart(item:any){
    this.cart.push(item)
    localStorage.setItem('cart', JSON.stringify(this.cart));
    window.alert('Your product has been added to the cart!');
  }

}

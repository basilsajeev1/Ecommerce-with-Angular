import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  productList:any[]=[];categories:any[]=[]
  constructor(private apiService:ApiService){

  }
  

  ngOnInit() {
    
    this.apiService.getProducts().subscribe(
      (response) => {
        this.productList = response;
        
      }
    );

    this.apiService.getCategories().subscribe(
      (response) => {
        this.categories = response;
        
      }
    );
  }

  

}

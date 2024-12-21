import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products`);
  }

  getProductDetails(id:any): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/categories`);
  }

  getProductsByCategory(category:any): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
}

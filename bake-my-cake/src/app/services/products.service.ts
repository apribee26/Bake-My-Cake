import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL: string = "http://localhost:3004/products";

  products:Array<Product> =[];
  constructor(private http: HttpClient) {
    // this.getProducts("").subscribe({next: data => {
      // this.products = data;
    }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.URL);
  }

  // getProducts(searchText:string): Observable<Array<Product>> {
  //   if(searchText || searchText != "")
  //   return this.http.get<Array<Product>>(`${this.URL}?category=${searchText}`);
  // }
  // getPoduct(id?: number) : Observable<Product> {
  //   return this.http.get<Product>(`${this.URL}/${id}`);
  // }
getProduct(id?: number) : Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
}

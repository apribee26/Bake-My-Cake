import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL: string = "http://localhost:3004/products";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.URL);
  }
  getPoduct(id?: number) : Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
}

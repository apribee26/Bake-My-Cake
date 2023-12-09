import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Brownie } from '../models/brownies';

@Injectable({
  providedIn: 'root'
})
export class BrowniesService {

  URL: string = "http://localhost:3002/brownies";
  constructor(private http: HttpClient) { }

  getBrownies(): Observable<Array<Brownie>> {
    return this.http.get<Array<Brownie>>(this.URL);
  }
  getBrownie(id?: number) : Observable<Brownie> {
    return this.http.get<Brownie>(`${this.URL}/${id}`);
  }
}

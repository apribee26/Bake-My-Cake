import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cakes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  URL: string = "http://localhost:3003/cakes";
  constructor(private http: HttpClient) { }

  getCakes(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.URL);
  }
  getCake(id?: number) : Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${id}`);
  }
}

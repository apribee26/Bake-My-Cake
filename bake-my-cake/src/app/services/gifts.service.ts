import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../models/desserts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  URL: string = "http://localhost:3000/gifts";
  constructor(private http: HttpClient) { }

  getGifts(): Observable<Array<Gift>> {
    return this.http.get<Array<Gift>>(this.URL);
  }
  getGift(id?: number) : Observable<Gift> {
    return this.http.get<Gift>(`${this.URL}/${id}`);
  }

  addGift(gift:Gift) {
    return this.http.post<Gift>(this.URL,gift);
  }
}

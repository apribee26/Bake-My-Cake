import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from '../models/cookies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  URL: string = "http://localhost:3001/cookies";
  constructor(private http: HttpClient) { }

  getCookies(): Observable<Array<Cookie>> {
    return this.http.get<Array<Cookie>>(this.URL);
  }
  getCookie(id?: number) : Observable<Cookie> {
    return this.http.get<Cookie>(`${this.URL}/${id}`);
  }
}

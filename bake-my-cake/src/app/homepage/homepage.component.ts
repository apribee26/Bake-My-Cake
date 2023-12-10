import { Component,Input } from '@angular/core';
import { Gift } from '../models/desserts';
import { Cookie } from '../models/cookies';
import { Brownie } from '../models/brownies';
import { Cake } from '../models/cakes';
import { GiftsService } from '../services/gifts.service';
import { CookiesService } from '../services/cookies.service';
import { BrowniesService } from '../services/brownies.service';
import { CakesService } from '../services/cakes.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent {

  gifts: Gift[] = [];
  cookies: Cookie[] = [];
  brownies: Brownie[] = [];
  cakes: Cake[] = [];

  allGifts: string = "Gifts";
  allCookies: string = "Cookies";
  allBrownies: string = "Brownies";
  allCakes: string = "Cakes";




  constructor(private giftsService: GiftsService,
    private cookiesService: CookiesService,
    private browniesService: BrowniesService,
    private cakesService: CakesService) { }

  ngOnInit(): void {

    this.giftsService.getGifts().subscribe({
      next: (data) => {
        console.log('Gifts', data);
        this.gifts = data;
      }
    })
    this.cookiesService.getCookies().subscribe({
      next: (data) => {
        console.log('Cookies', data);
        this.cookies = data;
      }
    })
    this.browniesService.getBrownies().subscribe({
      next: (data) => {
        console.log('Brownies', data);
        this.brownies = data;
      }
    })
    this.cakesService.getCakes().subscribe({
      next: (data) => {
        console.log('Cakes', data);
        this.cakes = data;
      }
    })
  }
}
  // modify
//   onSearchTextChanged(searchText: string) {
//     this.gift = Gift;
// if(searchText !== "")
//     this.gift = Gift;
//     this.gift = this.gift.filter(gift => gift.name?.startsWith(searchText));
//   }
// }


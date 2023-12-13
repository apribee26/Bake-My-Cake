import { Component,Input } from '@angular/core';
import { Gift } from '../models/desserts';
import { Cookie } from '../models/cookies';
import { Brownie } from '../models/brownies';
import { Cake } from '../models/cakes';
import { GiftsService } from '../services/gifts.service';
import { CookiesService } from '../services/cookies.service';
import { BrowniesService } from '../services/brownies.service';
import { CakesService } from '../services/cakes.service';


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
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
    this.cookiesService.getCookies().subscribe({
      next: (data) => {
        console.log('Cookies', data);
        this.cookies = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
    this.browniesService.getBrownies().subscribe({
      next: (data) => {
        console.log('Brownies', data);
        this.brownies = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
    this.cakesService.getCakes().subscribe({
      next: (data) => {
        console.log('Cakes', data);
        this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

  onSearchTextChanged(searchText: string) {
    this.giftsService.getGifts().subscribe({
      next: data => {
        if (searchText || searchText !== '') {
          this.gifts = data.filter(gift => gift.name?.toLowerCase().includes(searchText.toLowerCase()));
        }
        else
          this.gifts = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    }),    
      this.cookiesService.getCookies().subscribe({
      next: data => {
        if (searchText || searchText !== '') {
          this.cookies = data.filter(cookie => cookie.name?.toLowerCase().includes(searchText.toLowerCase()));
        }
        else
          this.cookies = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
    this.browniesService.getBrownies().subscribe({
      next: data => {
        if (searchText || searchText !== '') {
          this.brownies = data.filter(brownie => brownie.name?.toLowerCase().includes(searchText.toLowerCase()));
        }
        else
          this.brownies = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
    this.cakesService.getCakes().subscribe({
      next: data => {
        if (searchText || searchText !== '') {
          this.cakes = data.filter(cake => cake.name?.toLowerCase().includes(searchText.toLowerCase()));
        }
        else
          this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }

  
  
}

import { Component } from '@angular/core';
import { Gifts,Desserts } from '../models/desserts';
import { Gift, Dessert } from '../models/desserts';
import { Cookies,Cookie } from '../models/cookies';
import { Brownies,Brownie } from '../models/brownies';
import { Cakes,Cake } from '../models/cakes';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  gifts:Gift[] = Gifts;
  gift?: Gift={};

  cookies:Cookie[] = Cookies;
  cookie?: Cookie={};

  brownies:Brownie[] = Brownies;
  brownie?: Cookie={};

  cakes:Cake[] = Cakes;
  cake?: Cake={};

  desserts = Desserts;
  dessert?: Dessert;

  // dessert?: Dessert;
  
  allGifts: string = "Gifts";
  allCookies: string = "Cookies";
  allBrownies:string = "Brownies";
  allCakes: string = "Cakes";
 
  
  ngOnInit(): void {
  }

  // modify 
  onSearchTextChanged(searchText: string) {
    this.gifts = Gifts;
if(searchText !== "")
    this.gifts = Gifts;
    this.gifts = this.gifts.filter(gift => gift.name?.startsWith(searchText));
  }
}


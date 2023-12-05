import { Component } from '@angular/core';
import { Gifts, Desserts } from '../models/desserts';
import { Gift, Dessert } from '../models/desserts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  gifts:Gift[] = Gifts;
  gift?: Gift={};


  desserts = Desserts;
  dessert?: Dessert;

  // dessert?: Dessert;
  searchText: string = '';
  allCookies: string = "Cookies";
  allBrownies:string = "Brownies";
  allCakes: string = "Cakes";
  allGifts: string = "Gifts";
  
  ngOnInit(): void {
  }

  searchDessert() {
    if (this.searchText === '' || !this.searchText)
    this.desserts = Desserts;
  else {
    this.desserts = Desserts;
    this.desserts = this.desserts.filter(dessert => dessert.name?.startsWith(this.searchText.toLowerCase()));
     }
   }
}


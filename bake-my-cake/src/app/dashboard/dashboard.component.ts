import { Component,OnInit } from '@angular/core';
import { Gifts, Desserts } from '../models/desserts';
import { Gift, Dessert } from '../models/desserts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  // imageUrl:string='https://banner2.cleanpng.com/20180509/wfw/kisspng-happy-birthday-cookie-monster-biscuits-chocolate-5af2f6ee42f215.7940708215258723662742.jpg';

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

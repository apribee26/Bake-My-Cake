import { Component } from '@angular/core';

import { Gift} from '../models/desserts';
import { Cookie } from '../models/cookies';
import { Brownie } from '../models/brownies';
import { Cake } from '../models/cakes';
import { DessertsService } from '../services/desserts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private dessertService:DessertsService){}
  gifts:Gift[]=[];
  // gift?: Gift[]={};

  // cookies:Cookie[] = Cookies;
  cookies:Cookie[]=[];
  // cookie?: Cookie={};

  // brownies:Brownie[] = Brownies;
  brownies:Brownie[]=[];
  // brownie?: Brownie={};

  // cakes:Cake[] = Cakes;
  cakes:Cake[]=[];
  // cake?: Cake={};


  // desserts = Desserts;
  // dessert?: Dessert;

  // dessert?: Dessert;
  
  allGifts: string = "Gifts";
  allCookies: string = "Cookies";
  allBrownies:string = "Brownies";
  allCakes: string = "Cakes";
 
  
  ngOnInit(): void {
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


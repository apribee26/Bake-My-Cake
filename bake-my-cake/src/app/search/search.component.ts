import { Component } from '@angular/core';
import { Gifts, Desserts } from '../models/desserts';
import { Gift, Dessert } from '../models/desserts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  gifts:Gift[] = Gifts;
  gift?: Gift={};
  searchText: string = '';

  searchGift() {
    if (this.searchText === '' || !this.searchText)
    this.gifts = Gifts;
  else {
    this.gifts = Gifts;
    this.gifts = this.gifts.filter(gift => gift.name?.startsWith(this.searchText.toLowerCase()));
     }
   }
}

import { Component } from '@angular/core';
import { Gifts, Desserts } from '../models/desserts';
import { Gift, Dessert } from '../models/desserts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  desserts = Desserts;
  dessert?: Dessert;

  searchText: string = '';

  searchDessert() {
    if (this.searchText === '' || !this.searchText)
    this.desserts = Desserts;
  else {
    this.desserts = Desserts;
    this.desserts = this.desserts.filter(dessert => dessert.name?.startsWith(this.searchText.toLowerCase()));
     }
   }
}

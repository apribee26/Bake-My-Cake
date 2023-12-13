import { Component,Input } from '@angular/core';
import { Gift } from '../models/desserts';
import { Cookie } from '../models/cookies';
import { Brownie } from '../models/brownies';
import { Cake } from '../models/cakes';
import { Product } from '../models/products';
import { GiftsService } from '../services/gifts.service';
import { CookiesService } from '../services/cookies.service';
import { BrowniesService } from '../services/brownies.service';
import { CakesService } from '../services/cakes.service';
import { ProductsService } from '../services/products.service';


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
  products: Product[]=[];
  
  
  allGifts: string = "Gifts";
  allCookies: string = "Cookies";
  allBrownies: string = "Brownies";
  allCakes: string = "Cakes";

  constructor(private giftsService: GiftsService,
    private cookiesService: CookiesService,
    private browniesService: BrowniesService,
    private cakesService: CakesService,
    private productsService: ProductsService) { }

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
    this.productsService.getProducts().subscribe({
      next: data => {
        if (searchText || searchText !== '') {
          this.products = data.filter(product => product.name?.toLowerCase().includes(searchText.toLowerCase()));
        }
        else
          this.products = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftDetailComponent } from './operating-view/gift-detail/gift-detail.component';
import { CookieDetailComponent } from './operating-view/cookie-detail/cookie-detail.component';
import { BrownieDetailComponent } from './operating-view/brownie-detail/brownie-detail.component';
import { CakeDetailComponent } from './operating-view/cake-detail/cake-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingCartComponent } from './tabs/favorites/shopping-cart/shopping-cart.component';
import { FavoritesComponent } from './tabs/favorites/favorites.component';


const routes: Routes = [{
  path: "home",
  component: HomepageComponent
},
{
  path: "gift-detail/:id",
  component: GiftDetailComponent
},
{
  path: "cookie-detail/:id",
  component: CookieDetailComponent
},  
{
  path: "brownie-detail/:id",
  component: BrownieDetailComponent
},
{
  path: "cake-detail/:id",
  component: CakeDetailComponent
},
{
  path: "shopping",
  component: ShoppingCartComponent
}, 
{
  path: "favorite",
  component: FavoritesComponent
},    
{
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: "**",
  component: NotFoundComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 





}


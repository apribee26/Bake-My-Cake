import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './search/search.component';
import { HomepageComponent } from './homepage/homepage.component';


import { NotFoundComponent } from './not-found/not-found.component';



import { GiftDetailComponent } from './operating-view/gift-detail/gift-detail.component';
import { CookieDetailComponent } from './operating-view/cookie-detail/cookie-detail.component';
import { BrownieDetailComponent } from './operating-view/brownie-detail/brownie-detail.component';
import { CakeDetailComponent } from './operating-view/cake-detail/cake-detail.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './tabs/favorites/favorites.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './tabs/favorites/shopping-cart/shopping-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomepageComponent,
    NotFoundComponent,
 
    GiftDetailComponent,
    CookieDetailComponent,
    BrownieDetailComponent,
    CakeDetailComponent,
    HeaderComponent,
    FavoritesComponent,
    FooterComponent,
    ShoppingCartComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatRippleModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatRadioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

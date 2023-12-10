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


import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './search/search.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GiftDetailComponent } from './gift-detail/gift-detail.component';
import { CookieDetailComponent } from './landing-view/cookie-detail/cookie-detail.component';
import { BrownieDetailComponent } from './landing-view/brownie-detail/brownie-detail.component';
import { CakeDetailComponent } from './landing-view/cake-detail/cake-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomepageComponent,
    AboutUsComponent,
    NotFoundComponent,

    ShoppingCartComponent,
     GiftDetailComponent,
     CookieDetailComponent,
     BrownieDetailComponent,
     CakeDetailComponent,
   
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

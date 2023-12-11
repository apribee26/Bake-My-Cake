import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftDetailComponent } from './gift-detail/gift-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [{
  path: "home",
  component: HomepageComponent
},
{
  path: "gift-detail/:id",
  component: GiftDetailComponent
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


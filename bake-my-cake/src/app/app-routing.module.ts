import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CookieDetailComponent } from './landing-view/cookie-detail/cookie-detail.component';

const routes: Routes = [{
  path: "home",
  component: HomepageComponent
},
// {
//   path: "/landing-view/cookie-detail/:id",
//   component: CookieDetailComponent
// }, 
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

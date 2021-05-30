import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterRestaurantComponent } from './components/register-restaurant/register-restaurant.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { ContributorsComponent } from './components/contributors/contributors.component'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {path: '', component: RestaurantListComponent},
  {path: 'registerrestaurant', component: RegisterRestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent},
  {path: 'contributors', component: ContributorsComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

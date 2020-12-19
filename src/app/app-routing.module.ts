import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ContributorsComponent } from './contributors/contributors.component'

const routes: Routes = [
  {path: '', component: RestaurantListComponent},
  {path: 'registerrestaurant', component: RegisterRestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent},
  {path: 'contributors', component: ContributorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

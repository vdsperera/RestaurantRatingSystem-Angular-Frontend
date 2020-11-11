import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

import { ApiService } from '../api.service' 
import { Restaurant } from '../restaurant';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  // restaurants$: Observable<Restaurant[]>;
  restaurants: Restaurant;
  rests: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.get_restaurants();

  }

  public get_restaurants() {
    let value = (<HTMLSelectElement>document.getElementById('dishesdrop')).value;
    if(value != 'none')
      this.get_restaurants_dish(value)
    else
    {
      // this.restaurants$ = this.apiService.get_restaurants();
      this.apiService.get_restaurants()
      .subscribe((data) => {
         console.log('start component console restaurants')
         // this.restaurants$ = data['data']['restaurant_list']
         this.restaurants = data['data']['restaurant_list']
         // this.rests = data['data']['restaurant_list']
         // // console.log(this.rests)
         
         // // this.rests.sort(function(a, b){return a.restaurant_id - b.restaurant_id});
         // this.restaurants.sort(function(a, b){return b.overall_rating - a.overall_rating});

         console.log(this.restaurants)
         console.log('end component console restaurants')
      });
      // console.log('start component console')
      // console.log(this.rests)
      // console.log(this.restaurants)
      // console.log('end component console')
    }

  }

  public get_restaurants_dish(value)
  {
    // let value = (<HTMLSelectElement>document.getElementById('dishesdrop')).value;
    console.log('selected one is ' + value)
    this.apiService.get_restaurants_dish(value)
    .subscribe((data) => {
       console.log('start component console restaurant dish')
       // this.restaurants$ = data['data']['restaurant_list']
       this.restaurants = data['data']['restaurant_list']
       // this.rests = data['data']['restaurant_list']
       // // console.log(this.rests)
       
       // // this.rests.sort(function(a, b){return a.restaurant_id - b.restaurant_id});
       // this.restaurants.sort(function(a, b){return b.overall_rating - a.overall_rating});

       console.log(this.restaurants)
       console.log('end component console restaurant dish')
    });    
  }

  public order_list_by_overall_rating_des()
  {
    this.restaurants.sort(function(a, b){return b.overall_rating - a.overall_rating});
  }

  public order_list_by_overall_rating_ase()
  {
    this.restaurants.sort(function(a, b){return a.overall_rating - b.overall_rating});
  }

  public order_list_by_no_of_ratings_des()
  {
    this.restaurants.sort(function(a, b){return b.total_no_of_ratings - a.total_no_of_ratings});
  }

  public order_list_by_no_of_ratings_ase()
  {
    this.restaurants.sort(function(a, b){return a.total_no_of_ratings - b.total_no_of_ratings});
  }

  public view_details(restaurant_id) {
    console.log(restaurant_id)
    this.router.navigate(['/restaurants', restaurant_id]);
  }

}

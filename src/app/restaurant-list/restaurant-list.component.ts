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
  restaurants$: Observable<Restaurant[]>;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.get_restaurants();
  }

  public get_restaurants() {
    this.restaurants$ = this.apiService.get_restaurants();
    this.apiService.get_restaurants()
    .subscribe((data) => {
       // console.log('start component console')
       this.restaurants$ = data['data']['restaurant_list']
       // console.log(data['data']['restaurant_list'])
       // console.log('end component console')
    });

  }

  public view_details(restaurant_id) {
    console.log(restaurant_id)
    this.router.navigate(['/restaurants', restaurant_id]);
  }

}

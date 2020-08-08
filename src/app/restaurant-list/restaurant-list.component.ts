import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { ApiService } from '../api.service' 
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.get_restaurants();
    console.log(this.restaurants$);
  }

  public get_restaurants() {
    this.restaurants$ = this.apiService.get_restaurants();

  }

}

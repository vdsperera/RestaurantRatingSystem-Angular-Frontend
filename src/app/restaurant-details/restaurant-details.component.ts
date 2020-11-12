import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Rating } from '../models/rating';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service' 
import { map,catchError } from 'rxjs/operators'; 
import { DishRating } from '../dish_rating';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {


  public snack_bar_duration: number = 2000;
  public rating_array = [];
  public rating_model = new Rating;
  public dish_rating_list;
  private star;
  private checked_star;
  

  constructor(private route: ActivatedRoute,
    private api_service: ApiService) { }

  ngOnInit(): void {
    this.get_dish_rating_list(this.route.snapshot.paramMap.get('id'))
  }

  rating_event_hander($event: any)
  {
    this.rating_model = $event;
    console.log('even emitter');
    
  }

  submit()
  {
    
    let rating_data = this.rating_model.get_ratings()
    let value = (<HTMLSelectElement>document.getElementById('dishesdrop')).value;
    let restaurant_id = this.route.snapshot.paramMap.get('id')
    // console.log(rating_data.price_rating);
    const data = {
      data:{
        mdata:{
          "user": "vidumini",
          "token_number": null,
          "restaurant_id": +restaurant_id,
          "dish_id": value,
          "dish_rating": rating_data.dish_rating,
          "price_rating": rating_data.price_rating,
          "service_rating": rating_data.service_rating, 
          "review": "Good experience"
        }
      }
    };
    console.log(data);
    console.log('route param ' + this.route.snapshot.paramMap.get('id'))
  
  
    this.api_service.add_rating(data).pipe(
        map(resp => resp),
        catchError(err => {
          throw err;
        })
    )
    .subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }

  get_dish_rating_list(restaurant_id)
  {
   this.api_service.get_dish_rating_list_for_restaurant(restaurant_id)
   .subscribe((data) => {
     this.dish_rating_list = data['data']['dish_ratings']
     console.log(this.dish_rating_list)
   }); 
  }

  set_star_rating(x)
  {
    this.checked_star = Math.floor(x);
    this.star = (5 - Math.floor(x))
  }

  checked_star_array(x)
  {
    return Array(this.checked_star)
  }

  star_array()
  {
    return Array(this.star)
  }



}
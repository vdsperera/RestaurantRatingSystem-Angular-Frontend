import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Rating } from '../models/rating';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service' 
import { map,catchError } from 'rxjs/operators'; 
import { DishRating } from '../dish_rating';
import { Observable, throwError } from 'rxjs';
import { ModalService } from '../_modal';

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
  public restaurant_overall_rating;
  private star;
  private checked_star;
  private overall_star;
  private overall_checked_star;

  private rating_dish_star;
  private rating_dish_checked_star;
  private rating_price_star;
  private rating_price_checked_star;
  private rating_service_star;
  private rating_service_checked_star;

  private restaurant_dishes;
  public restaurant;
  private body_string;
  

  constructor(private route: ActivatedRoute,
    private api_service: ApiService,
    private modal_service: ModalService) { }

  ngOnInit(): void {
    this.get_dish_rating_list(this.route.snapshot.paramMap.get('id'))
    this.get_restaurant(this.route.snapshot.paramMap.get('id'))
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
    let token_number = (<HTMLSelectElement>document.getElementById('token_number')).value;
    let review_message = (<HTMLSelectElement>document.getElementById('review-message')).value;
    // console.log(rating_data.price_rating);
    console.log('review_message ', review_message)
    if(value == 'null'){
      value = null
    }

    if(token_number == 'null' || token_number == null || token_number == ''){
      console.log('get it')
      token_number = null
    }
    // console.log('dish rating : ' + rating_data.dish_rating)
    const data = {
      data:{
        mdata:{
          "user": "asanka",
          "token_number": token_number,
          "restaurant_id": +restaurant_id,
          "dish_id": value,
          "dish_rating": rating_data.dish_rating,
          "price_rating": rating_data.price_rating,
          "service_rating": rating_data.service_rating, 
          "review": review_message
        }
      }
    };
    // console.log(data);
    // console.log('token_number : ' + token_number);
    // console.log('route param ' + this.route.snapshot.paramMap.get('id'))
  
  
    this.api_service.add_rating(data).pipe(
        map(resp => resp),
        catchError(err => {
          this.body_string = err.error.detail;
          throw err;
        })
    )
    .subscribe(
      resp => window.alert("Added Successfully"),
      err => window.alert(this.body_string)
    );
  }

  get_restaurant(restaurant_id)
  {
   this.api_service.get_restaurant(restaurant_id)
   .subscribe((data) => {
     this.restaurant_dishes = data['data']['dishes']
     this.restaurant = data['data']
     this.restaurant_overall_rating =  Math.round(data['data']['overall_rating'] * 10) / 10
     // console.log(this.restaurant_dishes)
     // console.log(this.restaurant)
   });     
  }

  get_dish_rating_list(restaurant_id)
  {
   this.api_service.get_dish_rating_list_for_restaurant(restaurant_id)
   .subscribe((data) => {
     this.dish_rating_list = data['data']['dish_ratings']
     // this.restaurant_dishes = data['data']['dish_ratings']['dishes']
     // console.log(this.restaurant_dishes)
   }); 
  }

  set_star_rating(x)
  {
    this.checked_star = Math.floor(x);
    this.star = (5 - Math.floor(x))
    // console.log('full', x)
    // console.log('checked star', this.checked_star)
    // console.log('star', this.star)
    // console.log('half star', x%1)

  }

  checked_star_array(x)
  {
    return Array(this.checked_star)
  }

  star_array()
  {
    return Array(this.star)
  }

  set_overall_star_rating(x)
  {
    this.overall_checked_star = Math.floor(x);
    this.overall_star = (5 - Math.floor(x));
  }


  overall_checked_star_array(x)
  {
    return Array(this.overall_checked_star)
  }

  overall_star_array()
  {
    return Array(this.overall_star)
  }


  set_rating_dish_rating(x)
  {
    // var x = this.restaurant.dish_rating;
    this.rating_dish_checked_star = Math.floor(x);
    this.rating_dish_star = (5 - Math.floor(x));
  }

  set_rating_price_rating(x)
  {
    // var x = this.restaurant.price_rating;
    this.rating_price_checked_star = Math.floor(x);
    this.rating_price_star = (5 - Math.floor(x));    
  }

  set_rating_service_rating(x)
  {
    // var x = this.restaurant.service_rating;
    this.rating_service_checked_star = Math.floor(x);
    this.rating_service_star = (5 - Math.floor(x));    
  }


  rating_dish_checked_star_array()
  {
    return Array(this.rating_dish_checked_star)
  }

  rating_dish_star_array()
  {
    return Array(this.rating_dish_star)
  }

  rating_price_checked_star_array()
  {
    return Array(this.rating_price_checked_star)
  }

  rating_price_star_array()
  {
    return Array(this.rating_price_star)
  }

  rating_service_checked_star_array()
  {
    return Array(this.rating_service_checked_star)
  }

  rating_service_star_array()
  {
    return Array(this.rating_service_star)
  }



}
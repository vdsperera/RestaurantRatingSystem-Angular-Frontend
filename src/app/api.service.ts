import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { DishRating } from './dish_rating'
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://127.0.0.1:8000';
  type = 0

  constructor(private http: HttpClient) { }

  public get_restaurants(): Observable<Restaurant[]> {
    // console.log(this.http.get<Restaurant>(`${this.API_URL}/restaurants/list`))
    // console.log('start api service')
    // this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    // .subscribe((data) => {
    //    // console.log('start api service console')
    //    // console.log(data)
    //    // console.log('end api service console')
    // });
    // console.log('end api service')
    // return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    if(this.type == 0)
        return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    if(this.type == 1)
        return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_list/restaurant_list.json`);
  }

  public get_restaurant(restaurant_id): Observable<Restaurant[]> {
    // console.log(this.http.get<Restaurant>(`${this.API_URL}/restaurants/list`))
    // console.log('start api service')
    // this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    // .subscribe((data) => {
    //    // console.log('start api service console')
    //    // console.log(data)
    //    // console.log('end api service console')
    // });
    // console.log('end api service')
    // return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    if(this.type == 0)
        return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/${restaurant_id}`)
    if(this.type == 1)
        return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/${restaurant_id}`)
        // return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_list/restaurant_list.json`);
  }
  
  // test
  public get_restaurants_dish(dish_id): Observable<Restaurant[]> {
    // console.log(this.http.get<Restaurant>(`${this.API_URL}/restaurants/list`))
    // console.log('start api service')
    // this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    // .subscribe((data) => {
    //    // console.log('start api service console')
    //    // console.log(data)
    //    // console.log('end api service console')
    // });
    // console.log('end api service')
    // return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list?dishid=${dish_id}`);
    if(this.type == 0)
        return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list?dishid=${dish_id}`);
    if(this.type == 1)
        if(dish_id==1)
            return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_list_for_dish_n/get_restaurant_list_for_dish_1.json`);
        if(dish_id==2)
            return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_list_for_dish_n/get_restaurant_list_for_dish_2.json`);
        if(dish_id==3)
            return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_list_for_dish_n/get_restaurant_list_for_dish_3.json`);
        if(dish_id==4)
            return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_list_for_dish_n/get_restaurant_list_for_dish_4.json`);                   
  }

  public register_restaurant(restaurant: Restaurant):Observable<Restaurant>
  {
  	console.log(this.http.post<Restaurant>(`${this.API_URL}/restaurants/`, restaurant));
  	return this.http.post<Restaurant>(`${this.API_URL}/restaurants/`, restaurant);
  }

  public register_restaurant2(data):Observable<any>
  {
    //console.log(this.http.post(`${this.API_URL}/restaurants/`, data));
    return this.http.post(`${this.API_URL}/restaurants/`, data);
  }  

  public add_rating(data):Observable<any>
  {
    return this.http.post(`${this.API_URL}/ratings/`, data);
  }

  public get_dish_rating_list_for_restaurant(restaurant_id):Observable<any[]>
  {
    // return this.http.get<any[]>(`${this.API_URL}/ratings/dishes/list?restid=${restaurant_id}`)
     // .subscribe((data) => {
    //    // console.log('start api service console')
    //    // console.log(data)
    //    // console.log('end api service console')
    // });
    if(this.type == 0)
        return this.http.get<any[]>(`${this.API_URL}/ratings/dishes/list?restid=${restaurant_id}`)
    if(this.type == 1)
      if(restaurant_id==22)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_dish_list_for_restaurant_n/get_dish_list_for_restaurant_22.json`);
      if(restaurant_id==23)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_dish_list_for_restaurant_n/get_dish_list_for_restaurant_23.json`);

  }

}

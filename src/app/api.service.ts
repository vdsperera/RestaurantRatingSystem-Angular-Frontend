import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { DishRating } from './dish_rating'
import { map, catchError } from 'rxjs/operators'; 
import { UserService } from './services/user.service'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://127.0.0.1:8000';
  type = 0

  constructor(private http: HttpClient, private user_service: UserService) { }

  public get_restaurants(): Observable<any[]> {
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
        return this.http.get<any[]>(`${this.API_URL}/restaurants/list`)
    if(this.type == 1)
        return this.http.get<any[]>(`/assets/sample_responses/get_restaurant_list/restaurant_list.json`);
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
        // return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/${restaurant_id}`)
        if(restaurant_id==22)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_n/get_restaurant_22.json`);

        if(restaurant_id==23)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_n/get_restaurant_23.json`);

        if(restaurant_id==1)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_n/get_restaurant_1.json`);

        if(restaurant_id==92)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_restaurant_n/get_restaurant_92.json`);

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
    let http_options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.user_service.get_token()
      })
    };
    console.log(this.user_service.get_token())
    return this.http.post(`${this.API_URL}/ratings/`, data, http_options)
    // .pipe( catchError( (error: Response) => throwError(`VDS_Network Error: ${error.error.detail} ${error.status}`)  ) );
  }

  public get_dish_rating_list_for_restaurant(restaurant_id):Observable<any[]>
  {
    // return this.http.get<any[]>(`${this.API_URL}/ratings/dishes/list?restid=${restaurant_id}`)
     // .subscribe((data) => {
    //    // console.log('start api service console')
    //    // console.log(data)
    //    // console.log('end api service console')
    // });
    // console.log('rest id', restaurant_id)
    if(this.type == 0)
        return this.http.get<any[]>(`${this.API_URL}/ratings/dishes/list?restid=${restaurant_id}`)
    if(this.type == 1)
      if(restaurant_id==22)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_dish_list_for_restaurant_n/get_dish_list_for_restaurant_22.json`);
      if(restaurant_id==23)
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_dish_list_for_restaurant_n/get_dish_list_for_restaurant_23.json`);
      if(restaurant_id==1)
          console.log('here is 1')
          return this.http.get<Restaurant[]>(`/assets/sample_responses/get_dish_list_for_restaurant_n/get_dish_list_for_restaurant_1.json`);    

  }

  public get_system_dish_list():Observable<any>
  {
    if(this.type == 0)
      return this.http.get(`${this.API_URL}/dishes/`);
    if(this.type == 1)
      return this.http.get(`/assets/sample_responses/get_system_dish_list/get_system_dish_list.json`);

  }

  // public get_contributors_list():Observable<any>
  // {
  //   return this.http.get(`${this.API_URL}/contributions/list?fromdate=2020-11-01&todate=2020-12-01`)
  // }

  public get_contributors_list(from_date, to_date):Observable<any>
  {
    return this.http.get(`${this.API_URL}/contributions/list?fromdate=${from_date}&todate=${to_date}`)
  }
      

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://127.0.0.1:8000';

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
    return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/list`)
    ;
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

}

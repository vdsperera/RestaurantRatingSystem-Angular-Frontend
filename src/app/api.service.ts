import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  public get_restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.API_URL}/restaurants/`);
  }


}

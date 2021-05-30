import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions: any;
  public token: string;
  public token_expires: Date;
  public username: string
  public errors: any = [];
  public cookie_value: string;
  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private cookie_service: CookieService) {
    this.httpOptions = {
      headers: new HttpHeaders({
      	'Content-Type': 'application/json'
      })
    };

   }


  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    this.http.post(`${this.API_URL}/api-token-auth/`, JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post(`${this.API_URL}/api-token-refresh/`, JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }


  private updateData(token) {
    this.token = token;
    this.errors = [];
 
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
    this.cookie_service.set('username', this.username)
    this.cookie_service.set('token', this.token)
    this.cookie_value = this.cookie_service.get('token')
  }

  public get_token()
  {
    this.cookie_value = this.cookie_service.get('token')
    return this.cookie_value
  }
}

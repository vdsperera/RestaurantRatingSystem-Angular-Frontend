import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { throwError } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any;
  public usr = 'abm'

  constructor(public user_service: UserService) { }

  ngOnInit(): void {
  	this.user = {
  		username: '',
  		password: ''
  	}
  }

  login() {
    this.user_service.login({'username': this.user.username, 'password': this.user.password});
  }
 
  refreshToken() {
    this.user_service.refreshToken();
  }
 
  logout() {
    this.user_service.logout();
  }

  show_username(){
  	this.usr = this.user_service.get_token()
  }

}

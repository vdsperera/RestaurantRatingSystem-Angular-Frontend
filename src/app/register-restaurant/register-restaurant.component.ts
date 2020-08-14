import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  selected = 'Customer';

  constructor() { }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service' 
import { Restaurant } from '../models/restaurant';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map,catchError } from 'rxjs/operators'; 

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  selected = 'Customer';
  restaurants$: Observable<Restaurant[]>;

  // user_role: string;
  // rest_name: string;
  // rest_address: string;
  // rest_longitude: string;
  // rest_latitude: string;
  // rest_pnumber: string;


  constructor(private api_service: ApiService) { }

  ngOnInit(): void {
  	// this.restaurants$ = this.api_service.get_restaurants();
  }

  model = new Restaurant(43, 'Ravino', 'Unawatuna');

  onSubmit(form: NgForm)
  {
    const data = {
    	data:{
    		mdata:{
			    user: "vidumini",    
			  	name:"Raveena",
			    address: "Unawatuna",
			    phone_number: "0770273653",
			    longitude: "23.5444",
			    latitude: "77.5444",
			    role: "customer"
    		}
    	}
    };
    // this.restaurants$ = this.api_service.get_restaurants();
    this.api_service.register_restaurant2(data).pipe(
        map(resp => resp),
        catchError(err => {
          throw err;
        })
    )
    .subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
    // console.log(this.restaurants$)
  }


}

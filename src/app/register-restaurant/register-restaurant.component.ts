import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service' 
import { Restaurant } from '../models/restaurant';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map,catchError } from 'rxjs/operators'; 
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

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
  map: Map

  constructor(private api_service: ApiService) { }

  ngOnInit(): void {
  	// this.restaurants$ = this.api_service.get_restaurants();
    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([80.138088, 6.203364]),
        zoom: 10
      })
    });  	
  }

  model = new Restaurant('Raveena', 'Unawatuna', '0770273653', '23', '77');

  

  onSubmit(form: NgForm)
  {
    console.log(form.value.user_role);

    const data = {
    	data:{
    		mdata:{
			    user: "vidumini",    
			  	name:form.value.rest_name,
			    address: form.value.rest_address,
			    phone_number: form.value.rest_pnumber,
			    longitude: "23.5444",
			    latitude: "77.5444",
			    role: form.value.user_role
    		}
    	}
    };

    // const ndata = JSON.stringify(this.model);

    // try {
    //     JSON.parse(ndata);
    // } catch (e) {
    //     console.log("False")
    // }
    // console.log(this.model)
    // console.log(ndata)
    // console.log(typeof(this.model))
    // console.log(typeof(JSON.stringify(this.model)))

    //this.restaurants$ = this.api_service.get_restaurants();
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

  }


}


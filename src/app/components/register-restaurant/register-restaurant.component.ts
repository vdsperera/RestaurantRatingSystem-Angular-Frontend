import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service' 
import { Restaurant } from '../../models/restaurant';
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
import * as olControl from 'ol/control'
import TileLayer from 'ol/layer/Tile';
import * as olCoordinate from 'ol/coordinate';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  selected = 'Customer';
  restaurants$: Observable<Restaurant[]>;
  phone_number_pattern = '^[?:0|94|\+94|0094]?[?:[11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91][0|2|3|4|5|7|9]|7[0|1|2|5|6|7|8]\d]\d{6}$';


  // user_role = new FormControl('', Validators.required);
  // rest_name = new FormControl('', Validators.required);
  // rest_pnumber = new FormControl('');
  // rest_website = new FormControl('');
  // rest_email = new FormControl('', Validators.email);
  // rest_street = new FormControl('');
  // rest_city = new FormControl('', Validators.required);
  // rest_zip_code = new FormControl('');


  rest_register_form = new FormGroup(
  	{
	  user_role: new FormControl('', Validators.required),
	  rest_name: new FormControl('', Validators.required),
	  rest_pnumber: new FormControl('', Validators.pattern(this.phone_number_pattern)),
	  rest_website: new FormControl(''),
	  rest_email: new FormControl('', Validators.email),
	  rest_street: new FormControl(''),
	  rest_city: new FormControl('', Validators.required),
	  rest_zip_code: new FormControl(''),
    dishes: new FormControl(null)
  	});
  // toppings= new FormControl('')

  // user_role: string;
  // rest_name: string;
  // rest_address: string;
  // rest_longitude: string;
  // rest_latitude: string;
  // rest_pnumber: string;
  // map: Map

  
  dish_list: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  mp: Map;

  mouse_position = new olControl.MousePosition({
    coordinateFormat: olCoordinate.createStringXY(2),
    projection: 'EPSG:4326',
    target: document.getElementById('myposition'),
    undefinedHTML: '&nbsp'
  });

  fileToUpload: File;

  // this.map.addControl(this.mouse_position);



  model = new Restaurant('Raveena', 'Unawatuna', '0770273653', '23', '77');

  constructor(private api_service: ApiService) { }

  ngOnInit(): void {
  	// this.restaurants$ = this.api_service.get_restaurants();
    this.mp = new Map({
      target: 'map',
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

    this.mp.addControl(this.mouse_position);
    this.get_system_dish_list()
  }
  

  onSubmit(form: NgForm)
  {

    // const data = {
    //   data:{
    //     mdata:{
    //       user: "asanka",    
    //       dishes: this.rest_register_form.controls['dishes'].value
    //     }
    //   }
    // };

    // console.log(data);
   
    const data = {
    	data:{
    		mdata:{
			    user: "asanka",    
			  	name:form.value.rest_name,
			    address: {
            street_address: form.value.rest_street,
            city: form.value.rest_city
          },
			    phone_number: form.value.rest_pnumber,
			    longitude: "6.0007",
			    latitude: "80.3352",
			    role: form.value.user_role,
          dishes: this.rest_register_form.controls['dishes'].value
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
      resp => window.alert("Added Successfully"),
      err => window.alert(err.error.detail)
    );

    // this.map.addControl(this.mouse_position);

  }

  // update_rest_name()
  // {
  //   this.rest_name.setValue('New Name');
  // }
  handleFileInput(files: FileList)
  {
  	this.fileToUpload = files.item(0);
  }

  public get_system_dish_list()
  {
    this.api_service.get_system_dish_list()
    .subscribe((data) => {
      this.dish_list = data['data']['dishes']
    });
  }

  // saveAsProject(){
  //   //you can enter your own file name and extension
  //   this.writeContents(this.fileContent, 'Sample File'+'.jpg', 'image/jpg');
  // }

  // writeContents(content, fileName, contentType) {
  //   var a = document.createElement('a');
  //   var file = new Blob([content], {type: contentType});
  //   a.href = URL.createObjectURL(file);
  //   a.download = fileName;
  //   a.click();
  // }

}


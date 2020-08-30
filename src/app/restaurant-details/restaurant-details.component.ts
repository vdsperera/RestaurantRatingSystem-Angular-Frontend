import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {


  @Input('rating') private rating: number;
  @Input('start_count') private start_count: number;
  @Input('color') private color: string;
  @Output('rating_updated') private rating_updated = new EventEmitter();

  private snack_bar_duration: number = 2000;
  private rating_array = [];


  constructor(private snack_bar: MatSnackBar) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input('rating') public rating: number;
  @Input('star_count') public star_count: number=5;
  @Input('color') public color: string = 'accent';
  @Output('rating_updated') public rating_updated = new EventEmitter();

  public snack_bar_duration: number = 2000;
  public rating_array = [];

  constructor(private snack_bar: MatSnackBar) { }

  ngOnInit(): void {
    for(let index=0; index<this.star_count; index++)
    {
      this.rating_array.push(index);
    }
  }

  show_icon(index: number)
  {
    if(this.rating >= index+1)
    {
      return 'star';
    }
    else
    {
      return 'star_border';
    }

  }

  onClick(rating:number) {
    console.log(rating);
    this.snack_bar.open('You rated ' + rating + ' / ' + this.star_count, '', {
      duration: this.snack_bar_duration
    });
    //this.rating_updated.emit(rating);
    console.log(this.rating);
    this.rating = rating;
    return false;
  }  



}


export enum star_rating_color
{
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'

}

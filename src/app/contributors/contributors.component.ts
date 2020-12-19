import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  public contributor_list;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  	this.get_contributors()
  }

  public get_contributors()
  {
  	// this.apiService.get_contributors_list()
  	// .subscribe((data) => {
  	// 	this.contributor_list = data['data'];
  	// 	console.log(this.contributor_list)
  	// })
  }

  public month_all()
  {


  }

  public this_month()
  {
    let d = new Date();
    let n = d.getMonth();
    let y = d.getFullYear();

    // let days = this.daysInMonth(n, y)



    console.log('date', d)
    console.log('this month', n)
    console.log('this year', y)
    // console.log('days', days)

    let first_day = new Date(y, n, 1);
    let first_day_string = first_day.toString()
    let last_day = new Date(y, n+1, 0);
    let last_day_string = last_day.toString()

    console.log('first day', first_day_string)
    console.log('last day', last_day_string)

    this.apiService.get_contributors_list(first_day_string, last_day_string)
    .subscribe((data) => {
      this.contributor_list = data['data'];
      console.log(this.contributor_list)
    }) 
  }

  public previous_month()
  {
    let d = new Date();
    let n = d.getMonth();
    let y = d.getFullYear();

    // let days = this.daysInMonth(n, y)



    console.log('date', d)
    console.log('this month', n)
    console.log('this year', y)
    // console.log('days', days)

    let first_day = new Date(y, n-1, 1);
    let first_day_string = first_day.toString()
    let last_day = new Date(y, n, 0);
    let last_day_string = last_day.toString()

    console.log('first day', first_day_string)
    console.log('last day', last_day_string)

    this.apiService.get_contributors_list(first_day_string, last_day_string)
    .subscribe((data) => {
      this.contributor_list = data['data'];
      console.log(this.contributor_list)
    })     
  }



  daysInMonth (month, year) {
      return new Date(year, month, 0).getDate();
  }

  public find()
  {
    let from_date = (<HTMLSelectElement>document.getElementById('from_date')).value;
    let to_date = (<HTMLSelectElement>document.getElementById('to_date')).value;
    console.log('from date', from_date)
    console.log('to date', to_date)

    this.apiService.get_contributors_list(from_date, to_date)
    .subscribe((data) => {
      this.contributor_list = data['data'];
      console.log(this.contributor_list)
    })    
  }

}

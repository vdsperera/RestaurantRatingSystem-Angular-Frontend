import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {
      label: 'Blog',
      icon: 'rss_feed'
    },
    {
      label: 'Showcase',
      icon: 'slideshow'
    },
    {
      label: 'Docs',
      icon: 'notes'
    },
    {
      label: 'Pricing',
      icon: 'attach_money'
    },
    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Sign Up',
      icon: 'login'
    },


  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

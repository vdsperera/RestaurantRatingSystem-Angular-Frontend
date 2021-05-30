import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      route: ''
    },
    {
      label: 'Add Restaurant',
      icon: 'add_circle',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: '/registerrestaurant'
    },
    {
      label: 'Contributors',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      route: '/contributors'
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: ''
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      route: ''
    },
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      route: ''
    },


  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

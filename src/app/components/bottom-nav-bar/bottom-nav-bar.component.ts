import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
})
export class BottomNavBarComponent implements OnInit {
  barLinkList: { text: string; icon: string; routerLink: string }[] = [];

  constructor() {}

  ngOnInit() {
    this.barLinkList = [
      {
        text: 'Explore',
        icon: 'fa-home',
        routerLink: 'home',
      },
      {
        text: 'My Order',
        icon: 'fa-list-ul',
        routerLink: 'order',
      },
      {
        text: 'Service Bell',
        icon: 'fa-bell',
        routerLink: 'service',
      },
      {
        text: 'Profile',
        icon: 'fa-user',
        routerLink: 'profile',
      },
    ];
  }
}

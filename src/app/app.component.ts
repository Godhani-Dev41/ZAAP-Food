import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ZYC-Food';
  constructor(private router: Router) {}

  hideBottomBar = false;

  /** urls for which we shold hide bottom nav bar */
  readonly hideBottomNavBar = ['/home/cart'];

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.hideBottomBar = this.hideBottomNavBar.includes(res.url);
      }
    });
  }
}

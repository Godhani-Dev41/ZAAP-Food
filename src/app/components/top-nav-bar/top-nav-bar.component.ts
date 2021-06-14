import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent {
  @Input() title: string;

  constructor(private location: Location) {}

  navigateToBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-bell',
  templateUrl: './service-bell.component.html',
  styleUrls: ['./service-bell.component.scss'],
})
export class ServiceBellComponent implements OnInit {
  readonly title = 'NEED HELP';
  constructor() {}

  readonly services: Array<{ title: string; icon: string }> = [
    {
      title: 'Dessert Now',
      icon: 'fa fa-bell-o',
    },
    {
      title: 'Need Cutlery',
      icon: 'fa fa-bell-o',
    },
    {
      title: 'Need Cutlery for Kid(s)',
      icon: 'fa fa-bell-o',
    },
    {
      title: 'Need Assistance',
      icon: 'fa fa-bell-o',
    },
    {
      title: 'Billing Call',
      icon: 'fa fa-bell-o',
    },
  ];

  ngOnInit(): void {}
}

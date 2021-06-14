import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { PlaceOrderComponent } from './place-order.component';
import { TopNavBarModule } from 'src/app/components/top-nav-bar/top-nav-bar.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


@NgModule({
  declarations: [
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    PlaceOrderRoutingModule,
    TopNavBarModule,
    ProgressbarModule
  ],
  providers: []
})
export class PlaceOrderModule { }

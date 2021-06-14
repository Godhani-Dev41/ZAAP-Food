import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule, TabsModule, PipesModule],
})
export class OrderModule {}

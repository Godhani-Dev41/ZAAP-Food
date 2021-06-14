import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceBellRoutingModule } from './service-bell-routing.module';
import { ServiceBellComponent } from './service-bell.component';

@NgModule({
  declarations: [ServiceBellComponent],
  imports: [CommonModule, ServiceBellRoutingModule],
})
export class ServiceBellModule {}

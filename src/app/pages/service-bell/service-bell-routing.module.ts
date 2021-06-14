import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceBellComponent } from './service-bell.component';

const routes: Routes = [{ path: '', component: ServiceBellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceBellRoutingModule {}

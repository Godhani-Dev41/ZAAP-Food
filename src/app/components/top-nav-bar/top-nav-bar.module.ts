import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopNavBarComponent],
  exports: [TopNavBarComponent],
})
export class TopNavBarModule {}

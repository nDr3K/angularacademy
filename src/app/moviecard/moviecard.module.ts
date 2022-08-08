import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviecardComponent } from './moviecard.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MoviecardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MoviecardComponent
  ]
})
export class MoviecardModule { }

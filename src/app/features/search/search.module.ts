import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MoviecardModule } from 'src/app/moviecard/moviecard.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MoviecardModule,
    MatIconModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }

import { Component, Input, OnInit } from '@angular/core';
import {Movie} from '../models/movie.interface';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  @Input() movies! : Array<Movie>

  constructor() { }

  ngOnInit(): void {
  }

}

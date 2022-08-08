import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TestConfiguration} from 'src/app/models/config.interface';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss']
})
export class TestOneComponent implements OnInit {
  @Input() config!: TestConfiguration;
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  test: any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Student} from 'src/app/models/student.interface';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnChanges ,OnInit {
  @Input() students!: Array<Student>
  viewStudents: Array<Student> = new Array<Student>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['students']?.currentValue) {
      this.viewStudents = (changes?.['students']?.currentValue as Array<Student>).sort(
        (s1: Student, s2: Student) => 
          s1.surname.toLocaleLowerCase().localeCompare(s2.surname.toLocaleLowerCase()))
    }
  }

  ngOnInit(): void {
  }

}

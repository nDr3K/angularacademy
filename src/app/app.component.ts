import { Component, OnChanges, OnDestroy, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import {AppViewService} from './app-view.service';
import {STUDENTS} from './configs/students.config';
import {StudentsComponent} from './features/students/students.component';
import {TestConfiguration} from './models/config.interface';
import {Student} from './models/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppViewService]
})
export class AppComponent implements OnChanges, OnDestroy{
  @ViewChild('studentsVT') studentsVT! : StudentsComponent //important
  @ViewChildren('viewStudents') viewStudents!: QueryList<StudentsComponent> //usless

  title = 'AcademyAngular2022';
  clicked: boolean = false;

  config: TestConfiguration;

  constructor(private viewService: AppViewService) {
    this.config = this.viewService.getConfig()
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log('studentsVT On Init', this.studentsVT)
    console.log('viewStudents On Initi', this.viewStudents)
  }

  ngAfterViewInit(): void {
    console.log('studentsVT On Init', this.studentsVT)
    console.log('viewStudents On Initi', this.viewStudents)
  }

  students: Array<Student> = [...STUDENTS]

  handleClick = (): void => {
    this.clicked = true;
    setTimeout(() => this.clicked = false, 2000)
  }

  ngOnDestroy(): void {
  }
}

//angular component lifecycle hooks
/*
** 1. contructor
** 2. OnChanges => esegue condice al cambiamento di stato => viene eseguito solo se il componente ha almeno un @Input() 
** 3. OnInit => logica di init del componente, se sono presenti @Input() avrò il loro primo valore
** 4+5. CONTENT PROJECTION => passare contenuto (html) all'interno di un component grazie a <ng-content> => AfterContentInit + AfterContentChecked
** 6+7. VIEW REF => AfterViewInit + AfterViewChecked => Variabili di Template (saranno undefined fino a questo step)
** 8. OnDestroy => un componente viene distrutto quando si cambia sezione o all'avvenimento del verifarci di terminate condizioni (ngIf)
** 2.5, 3.5, 5.5 => DoCheck => scatena la change detection => avviene al cambio degli input in modo da aggiornare la reinderizzazione dell elemento
*/
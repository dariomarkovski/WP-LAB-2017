import {Component, OnInit} from '@angular/core';
import {Student} from './Model/student';
import {StudentManagementService} from './student-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  students: Student[];

  constructor(private studentManagementService: StudentManagementService, private router: Router) {

  }

  ngOnInit(): void {
    this.students = this.studentManagementService.getStudents();
  }

}

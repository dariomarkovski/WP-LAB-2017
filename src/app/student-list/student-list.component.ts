import { Component, OnInit } from '@angular/core';
import {Student} from "../Model/student";
import {StudentManagementService} from "../student-management.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentManagementService: StudentManagementService, private router: Router) { }

  ngOnInit() {
    this.students = this.studentManagementService.getStudents();
  }

  goToNewStudentComponent(){
    this.router.navigate(['/new']);
  }

}

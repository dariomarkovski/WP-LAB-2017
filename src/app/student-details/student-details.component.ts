import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {StudentManagementService} from "../student-management.service";
import {Student} from "../Model/student";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;

  constructor(private studentManagementService: StudentManagementService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.get('id'))
      .subscribe((id) => {
        this.studentManagementService.getStudentFromId(+id)
          .then((student: Student) => this.student = student)
          .catch((error) => console.error(error));
      });
  }

  goToEdit() {
    this.router.navigate(['/edit', this.student.id]);
  }

  goBack() {
    this.router.navigate(['/list']);
  }

}

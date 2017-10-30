import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Student} from "../Model/student";
import {StudentManagementService} from "../student-management.service";
import {ControlValidatorService} from "../control-validator.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private studentManagementService: StudentManagementService, private fb: FormBuilder, private controlValidatorService: ControlValidatorService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.get('id'))
      .subscribe((id) => {
        this.studentManagementService.getStudentFromId(+id)
          .then((student: Student) => {
            this.student = student;
            this.form = this.fb.group({
              name: [this.student.name, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
              surname: [this.student.surname, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
              index: [this.student.index, [Validators.required, Validators.min(100000), Validators.max(999999)]],
              module: [this.student.module, [Validators.required, this.controlValidatorService.moduleValidator]]
            });
          }).catch((error) => {
            console.error(error);
        });
      })
  }

  onSubmit() {
    let formValue = this.form.value;
    this.studentManagementService.updateStudent(this.student.id, formValue.name, formValue.surname, formValue.index, formValue.module)
      .then(() => this.router.navigate(['/list']))
      .catch((error) => console.error(error));
  }

  goBack() {
    this.router.navigate(['/details', this.student.id]);
  }

}

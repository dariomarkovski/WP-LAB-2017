import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentManagementService} from "../student-management.service";
import {Router} from "@angular/router";
import {ControlValidatorService} from "../control-validator.service";

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private studentManagementService: StudentManagementService, private router: Router, private controlValidatorService: ControlValidatorService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      index: ['', [Validators.required, Validators.min(100000), Validators.max(999999)]],
      module: ['', [Validators.required, this.controlValidatorService.moduleValidator]]
    })
  }

  onSubmit() {
    let formValue = this.form.value;
    this.studentManagementService.createNewStudent(formValue.name, formValue.surname, formValue.index, formValue.module)
      .then(() => this.form.reset())
      .catch((error) => console.error(error));
  }

  goBack() {
    this.router.navigate(['/list']);
  }

}

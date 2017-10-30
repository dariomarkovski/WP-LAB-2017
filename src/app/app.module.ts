import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentManagementService} from './student-management.service';
import {RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import { NewStudentComponent } from './new-student/new-student.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditStudentComponent } from './edit-student/edit-student.component';
import {ControlValidatorService} from "./control-validator.service";

const routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'details/:id',
    component: StudentDetailsComponent
  },
  {
    path: 'new',
    component: NewStudentComponent
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    NewStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [StudentManagementService, ControlValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {Injectable} from '@angular/core';
import {Student} from './Model/student';

@Injectable()
export class StudentManagementService {

  students = [
    new Student(1, 'Dario', 'Markovski', '151034', 'KNI'),
    new Student(2, 'Stefan', 'Kunovski', '151048', 'KNI'),
    new Student(3, 'Mario', 'Talevski', '173294', 'PET'),
    new Student(4, 'Aleksandar', 'Tasevski', '151144', 'KNI')
  ];

  constructor() {
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getStudentFromId(id: number): Promise<Student> {
    return new Promise<Student> ((resolve , reject) => {
      resolve(this.students.find(student => student.id === id));
    })
  }

  public createNewStudent(name: string, surname: string, index: string, module: string) {
    return new Promise<void> ((resolve, reject) => {
      let newId = this.students[this.students.length - 1].id + 1;
      this.students.push(new Student(newId, name, surname, index, module));
      resolve();
    });
  }

  updateStudent(id: number, name: string, surname: string, index: string, module: string) {
    return new Promise<void> ((resolve, reject) => {
      let student = this.students.find((student: Student) => student.id === id);
      student.name = name;
      student.surname = surname;
      student.index = index;
      student.module = module;
      resolve();
    });
  }
}

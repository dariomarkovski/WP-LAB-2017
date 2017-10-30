export class Student {

  public id: number;
  public name: string;
  public surname: string;
  public index: string;
  public module: string;

  constructor(id: number, name: string, surname: string, index: string, module: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.index = index;
    this.module = module;
  }

}

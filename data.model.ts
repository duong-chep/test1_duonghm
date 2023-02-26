import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { Subject } from "./Subject.model";
@Injectable({
  providedIn: 'root',
})
export class DataMock{

  listSubject:Subject[] = [
    {
      id: 1,
      name: 'co so du lieu',
      credits: 3,
    },
    {
      id: 2,
      name: 'dien toan dam may',
      credits: 2,
    },
    {
      id: 3,
      name: 'cong nghe da phuong tien',
      credits: 3,
    },
    {
      id: 4,
      name: 'toan cao cap',
      credits: 3,
    },
    {
      id: 5,
      name: 'toan roi rac',
      credits: 2,
    },
    {
      id: 6,
      name: 'nguyen ly he dieu hanh',
      credits: 3,
    }
  ]

  listStudents: Student[] = [
    {
      id: 1,
      name: 'DuongHM',
      age: 25,
      address: 'Hung Yen',
      subject: [this.listSubject[0],this.listSubject[3],this.listSubject[4]]
    },
    {
      id: 2,
      name: 'LongDN',
      age: 21,
      address: 'Hung Yen',
      subject: [this.listSubject[0],this.listSubject[1]]
    },
  ];


}

import { Injectable } from '@angular/core';
import { Employee } from '../models';
import { Observable, of } from "rxjs";

const Employees: Partial<Employee>[] = [
  {
    EmpID: 1,
    BranchID: 0,
    FirstName: 'rodchananant',
    LastName: 'khunakornophat',
    Age: 20,
    BirthDate: new Date(1999, 08, 29),
    HomeAddress: '75 bangsaen sai3 ....',
    HasLeft: false,
    Email: 'rod8711@gmail.com',
    Image: 'assets/image.png',
    PhoneNo: '0899335688',
    IsFulltime: false,
    IsPartTime: false,
    IsManager: false,
    Username: 'rod41732',
    Password: 'doge41732',
  },
  {
    EmpID: 2,
    BranchID: 0,
    FirstName: 'doge',
    LastName: 'shiba',
    Age: 20,
    BirthDate: new Date(1999, 08, 29),
    HomeAddress: '75 bangsaen sai3 ....',
    HasLeft: false,
    Email: 'doge@gmail.com',
    Image: 'assets/image.png',
    PhoneNo: '1234567890',
    IsFulltime: false,
    IsPartTime: false,
    IsManager: false,
    Username: 'doge',
    Password: 'doge41732',
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return of(Employees);
  }
}

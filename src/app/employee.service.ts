import { Injectable } from '@angular/core';
import { Employee } from '../models';
import { Observable, of } from "rxjs";
import { EmployeeListComponent } from './employee-list/employee-list.component';

const employees: Employee[] = [
  {
    EmpID: 1,
    BranchID: 1,
    FirstName: "rodchananant",
    LastName: "khunakornophat",
    Age: 20,
    BirthDate: new Date(1999, 8, 29),
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
    BranchID: 2,
    FirstName: 'doge',
    LastName: 'shiba',
    Age: 20,
    BirthDate: new Date(1999, 8, 29),
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

employees.push({
  ...employees[1],
  FirstName: 'doge3',
  EmpID: 3,
})
employees.push({
  ...employees[1],
  FirstName: 'doge4',
  EmpID: 4,
})
employees.push({
  ...employees[1],
  FirstName: 'doge5',
  EmpID: 5,
})

let idx = 5;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(
  ) { }

  getEmployees() {
    return of(employees);
  }

  getEmployeeByID(id: number): Observable<Employee> {
    return of(employees.filter(emp => emp.EmpID === id)[0]);
  }

  getEmployeesInBranch(branchID: number): Observable<Employee[]> {
    return of(employees.filter(emp => emp.BranchID === branchID));
  }

  setEmployeeBranch(empID: number, branchID: number): Observable<any> {
    const employee =employees.filter(emp => emp.EmpID == empID)[0];
    employee.BranchID = branchID;
    return of(true);
  }

  // primitives
  createEmployee(employee: Employee): Observable<Employee> {
    employee.EmpID = ++idx;
    employees.push(employee);
    return of(employee)
  }

  searchEmployee(filter: Partial<Employee>): Observable<Employee[]> {
    let f = employees;
    for (let key in filter) {
      f = f.filter(emp => emp[key].toString().toLowerCase().includes(filter))
    }
    return of(f);
  }

  editEmployee(empID: number, update: Partial<Employee>) {
    const employee =employees.filter(emp => emp.EmpID == empID)[0];
    for (let key in update) employee[key] = update[key]
    return of(true); 
  }

  deleteEmployee(empID: number) {

  }

}

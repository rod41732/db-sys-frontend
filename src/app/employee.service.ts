import { Injectable } from '@angular/core';
import { Employee, ResponseStatus } from '../models';
import { Observable, of } from "rxjs";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

const employees = [];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(
    private apiService: ApiService,
  ) { }

  getEmployees() {
    return this.apiService.get('/employee');
  }

  getEmployeeByID(id: number): Observable<Employee> {
    return this.apiService.get(`/employee/${id}`);
  }

  getEmployeesInBranch(branchID: number): Observable<Employee[]> {
    return this.apiService.get<Employee[]>('/employee').pipe(
      map(res => res.filter(emp => emp.BranchID == branchID))
    );
  }

  setEmployeeBranch(empID: number, branchID: number): Observable<any> {
    const employee =employees.filter(emp => emp.EmpID == empID)[0];
    employee.BranchID = branchID;
    return of(true);
  }

  createEmployee(employee: Employee): Observable<ResponseStatus> {
    return this.apiService.post('/employee', employee);
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
    const idx = employees.findIndex(emp => emp.EmpID === empID);
    if (idx !== -1)
      employees.splice(idx, 1);
  }

}

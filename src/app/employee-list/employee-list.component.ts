import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/models';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  filter: Partial<Employee> = {};
  allowEdit: boolean;

  constructor(
    private employeeService: EmployeeService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    })
    this.userService.role.subscribe(res => {
      if (res === 'manager') this.allowEdit = true;
      else this.allowEdit = false;
    })
  }

  search() {
    this.employeeService.searchEmployee(this.filter).subscribe(res => {
      this.employees = res;
    })
  }

  editEmployee(empID: number) {
    // this.employeeService.editEmployee(empID, update);
    this.router.navigate(['employee', empID]);
  }

  deleteEmployee(empID: number) {
    this.employeeService.deleteEmployee(empID);
  }

  newEmployee() {
    this.router.navigate(['employee', 'add']);
  }
  
  formatName(employee: Employee) {
    return `${employee.FirstName} ${employee.LastName}`
  }

  formatAddress(employee: Employee) {
    return `${employee.HomeAddress}`
  }

  

}

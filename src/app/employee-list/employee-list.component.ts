import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/models';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  filter: Partial<Employee>;


  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    })
  }

  search() {
    this.employeeService.searchEmployee(this.filter).subscribe(res => {
      this.employees = res;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Employee, Branch } from 'src/models';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  employee: Partial<Employee> = {};
  isCreating: boolean;
  allBranches: Branch[];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private branchService: BranchService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idx = +params.id;
      if (!isNaN(idx)) {
        this.isCreating = false;
        this.employeeService.getEmployeeByID(idx).subscribe(employee => {
          this.employee = employee;
        })
      } else {
        this.isCreating = true;
      }
      this.branchService.getAllBranches().subscribe(res => {
        this.allBranches = res;
      })
    })
  }

  openFileUpload() {
    (document.querySelector('#fileUpload') as HTMLElement).click();
  }
  
  ok() {
    if (this.isCreating) this.createEmployee();
    else this.editEmployee();
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employee as Employee);
  }

  editEmployee() {
    this.employeeService.editEmployee(this.employee.EmpID, this.employee);
  }

  cancel() {
    this.router.navigate(['employee']);
  }

 
}
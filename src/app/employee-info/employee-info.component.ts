import { Component, OnInit } from '@angular/core';
import { Employee, Branch } from 'src/models';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  employee: Employee;
  isCreating: boolean;
  allBranches: Branch[];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private branchService: BranchService
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

}

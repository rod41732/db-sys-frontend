import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Branch, Employee } from 'src/models';
import { BranchService } from '../branch.service';
import { padzero } from '../util';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-branch-info-page',
  templateUrl: './branch-info-page.component.html',
  styleUrls: ['./branch-info-page.component.scss']
})
export class BranchInfoPage implements OnInit {
  branch: Partial<Branch> = {};
  isCreating: boolean;
  branchEmployees: Employee[] = [];
  allEmployees: Employee[] = [];
  selectedEmployee: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private branchService: BranchService,
    private employeeService: EmployeeService,
    // @Inject(MAT_DIALOG_DATA) data: Branch,
  ) { 
    this.route.params.subscribe(params => {
      const idx = +params.id;
      console.log('new param', idx);
      if (!isNaN(idx)){
          this.branchService.getBranchByID(idx).subscribe((res) => {
            res.OpenDate = new Date(res.OpenDate);
            this.branch = res;
          })
          this.employeeService.getEmployeesInBranch(idx).subscribe((res) => {
            this.branchEmployees = res;
          })
          this.isCreating = false;
      } else {
        this.isCreating = true;
        this.branch = {
          OpenDate: new Date(),
        }
      }
      this.employeeService.getEmployees().subscribe(res => {
        this.allEmployees = res;
      })
    })

    // this.branch = data;

  }

  ngOnInit() {
    // this.router.
  }

  get openDate(): string {
    const date = this.branch.OpenDate;
    return `${padzero(date.getFullYear(), 4)}-${padzero(date.getMonth()+1, 2)}-${padzero(date.getDate(), 2)}`;
  }

  set openDate(date: string) {
    console.log(date);
    this.branch.OpenDate = new Date(date);
  }

  addEmployee() {
    if (this.selectedEmployee) {
      this.employeeService.setEmployeeBranch(this.selectedEmployee, this.branch.BranchID).toPromise().then(res => {
        this.employeeService.getEmployeesInBranch(this.branch.BranchID).subscribe(res => {
          this.branchEmployees = res;
        })
      })
    }
  }

  removeEmployeeFromBranch(empID: number) {
    this.employeeService.setEmployeeBranch(empID, 0)
  }

  saveOrCreate() {
    if (this.isCreating) {
      this.branchService.createBranch(this.branch as Branch).toPromise().then((res: any) => {
        console.log(res);
        this.router.navigate(['branch', res.id]);
      });
    } else {
      this.branchService.editBranch(this.branch.BranchID, this.branch);
      // this
      // this.employeeService.setEmployeeBranch()
    }
  }
}

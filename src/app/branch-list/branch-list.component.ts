import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BranchInfoPage } from '../branch-info-page/branch-info-page.component';
import { Branch } from 'src/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  branchList;
  searchFormControl: FormControl | null;

  constructor(
    private branchService: BranchService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.branchService.getAllBranches().subscribe((res) => {
      this.branchList = res;
    });
    this.searchFormControl = new FormControl();
  }

  search() {
    this.branchService.queryBranch(this.searchFormControl.value || '').subscribe(res => {
      this.branchList = res;
    });
  }

  branchAddress(branch: Branch): string {
    const {StreetNo, SubDistrict, District, Province, ZipCode} = branch;
    return [StreetNo, SubDistrict, District, Province, ZipCode].join(' ');
  }

  newBranch() {
      this.router.navigate(['branch', 'add']);
  }

  deleteBranch(branchID: number) {
    this.branchService.deleteBranch(branchID).subscribe(res => {
      alert("OK");
      this.branchService.getAllBranches().subscribe(() => {});
    }, err => {
      alert("Error" + err.error.message);
    });
  }
}

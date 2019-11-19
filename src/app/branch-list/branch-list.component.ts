import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BranchInfoPage } from '../branch-info-page/branch-info-page.component';

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
    private dialog: MatDialog
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

  newBranchDialog() {
    const dialogRef = this.dialog.open(BranchInfoPage, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res != null) {
        this.branchService.createBranch(res).subscribe(() => {
          this.search(); // refresh page
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { FormControl } from '@angular/forms';

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
  ) { }

  ngOnInit() {
    this.branchService.getAllBranches().subscribe((res) => {
      console.log('get branches');
      this.branchList = res;
    });
    this.searchFormControl = new FormControl();
  }

  search() {
    this.branchService.queryBranch(this.searchFormControl.value).subscribe(res => {
      this.branchList = res;
    });
  }
}

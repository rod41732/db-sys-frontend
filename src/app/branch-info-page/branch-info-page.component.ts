import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-branch-info-page',
  templateUrl: './branch-info-page.component.html',
  styleUrls: ['./branch-info-page.component.scss']
})
export class BranchInfoPage implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BranchInfoPage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }


}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  currentProduct: Partial<Product>
  file: File

  constructor(
    public dialogRef: MatDialogRef<ProductInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Partial<Product>,
  ) {
    this.currentProduct = {...product};
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close({
      product: this.currentProduct,
      file: this.file,
    });
  }

  logChange() {
    console.log('changed');
  }

  validateType() {
    console.log('type')
  }

  validateName() {
    console.log('type')
  }

  handleFiles(files: FileList) {
    this.file = files.item(0);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}

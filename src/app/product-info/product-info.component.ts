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

  constructor(
    public dialogRef: MatDialogRef<ProductInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Partial<Product>,
  ) {
    this.currentProduct = {...product};
  }

  ngOnInit() {
  }

  save() {
    console.log(this.currentProduct);
    this.dialogRef.close(this.currentProduct);
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

  closeDialog() {
    this.dialogRef.close(null);
  }
}

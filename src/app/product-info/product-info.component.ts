import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/models';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  currentProduct: Partial<Product>
  file: File
  isCreating: boolean;

  constructor(
    public dialogRef: MatDialogRef<ProductInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Partial<Product>,
  ) {
    this.isCreating = !product;
    product = product || {};
    this.currentProduct = {...product};
  }

  ngOnInit() {
  }

  save() {
    console.log(this.currentProduct)
    if (!this.currentProduct.ProdName) {
      alert("Please specify product name");
      return;
    } 
    if (!this.currentProduct.ProdType) {
      alert("Please specify product type");
      return;
    }
    if (this.currentProduct.AmountInStock == null ||
      this.currentProduct.AmountInStock == undefined ||
      this.currentProduct.AmountInStock < 0) {
      alert("Amount in stock must >= 0");
      return;
    }
    if (this.currentProduct.DefaultPrice == null ||
      this.currentProduct.DefaultPrice == undefined ||
      this.currentProduct.DefaultPrice < 0) {
      alert("Default price must >= 0");
      return;
    }


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

  openFileUpload() {
    (document.querySelector('#fileUpload') as HTMLElement).click();
  }

  handleFiles(files: FileList) {
    console.log(files)
    this.file = files.item(0);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}

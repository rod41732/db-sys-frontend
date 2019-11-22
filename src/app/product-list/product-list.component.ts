import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { Product } from 'src/models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchFormControl = new FormControl();
  products: Product[];

  constructor(
    private dialog: MatDialog,
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    })
  }

  newProductModal() {
    const dialogRef = this.dialog.open(ProductInfoComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res === null) return;
      this.productService.createProduct(res);
    });
    
  }

}

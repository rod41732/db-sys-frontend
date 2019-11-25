import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { Product, ProductFormData } from 'src/models';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  filter = {
    name: '',
    type: '',
  }
  products: Product[];
  allowEdit: boolean;

  constructor(
    private dialog: MatDialog,
    public productService: ProductService,
    public userService: UserService,
  ) { 
    this.userService.isLoggedIn.subscribe(res => {
      this.allowEdit = res;
    })
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      console.log('get products', res)
      if (res) {
        this.products = res;
      }
    })
  }

  newProductModal() {
    const dialogRef = this.dialog.open(ProductInfoComponent, {
      data: null,
      width: '60%',
      maxWidth: '800px',
    });

    dialogRef.afterClosed().subscribe((res: ProductFormData) => {
      console.log('add product', res);
      if (!res) return;
      this.productService.createProduct(res).subscribe(res => {
        console.log("Add Product:", res);
        // alert('OK');
        this.productService.getProducts().toPromise().then(() => {});
      }, err => {
        console.dir(err)
        alert('Error creating product ' + err.error.message);
      });
    });
    
  }
  
  search() {
    this.productService.searchProduct(this.filter.name, this.filter.type).subscribe(res => {
      this.products = res;
    });
  }

}


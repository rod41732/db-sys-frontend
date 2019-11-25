import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductFormData } from 'src/models';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input('item') item: Product;
  @Input('allow-edit') allowEdit: boolean;
  
  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }

  editItem() {
    const dialogRef = this.dialog.open<ProductInfoComponent, Partial<Product>, ProductFormData>(ProductInfoComponent, {
      data: this.item,
      width: '60%',
      maxWidth: '800px'
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res || !res.product) return;
      this.productService.editItem(this.item.ProdID, res).subscribe(res => {
        alert("OK");
        this.productService.getProducts().subscribe(() => {}); // refresh
      }, err => alert("Error:" + err.error.message));
    })
  }

  deleteItem() {
    if (window.confirm("Do you want to delete this product ?")) {
      this.productService.deleteItem(this.item.ProdID).then(res => {
        alert("OK:" + JSON.stringify(res.message))
        this.productService.getProducts().toPromise().then(() => {});
      }).catch(err => {
        alert("ERROR: " + JSON.stringify(err.error.message))
      });
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models';
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

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }

  editItem() {
    const dialogRef = this.dialog.open<ProductInfoComponent, Partial<Product>>(ProductInfoComponent, {
      data: this.item,
      width: '60%',
      maxWidth: '800px'
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === null) return;
      this.productService.editItem(this.item.ProID, res);
    })
  }

  deleteItem() {
    if (window.confirm("Do you want to delete this product ?")) {
      this.productService.deleteItem(this.item.ProID);
    }
  }

}

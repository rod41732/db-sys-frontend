import { Component, OnInit } from '@angular/core';
import { ProductLine, Product} from 'src/models';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.scss']
})
export class TransactionInfoComponent implements OnInit {

  productLines: ProductLine[] = [];
  productsList: Product[] = [];
  productLine: Partial<ProductLine> = { 
    NumBuy: 1,
  }

  constructor(
    public transactionService: TransactionService,
    public productService: ProductService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.productsList = res;
    })
    this.route.params.subscribe(res => {
      const idx = +res.id;
      console.log("transaction ID =", idx);
      if (!isNaN(idx)) {
        this.transactionService.getProductLines(idx).subscribe((res) => {
          this.productLines = res;
        });
      }
    })
  }

  addProductLine() {
    this.productLines.push(this.productLine as ProductLine);
    this.productLine = {
      NumBuy: 0,
    }
  }

  changeSelection(evt) {
    const proID = evt.value;
    const price = this.productsList.filter(p => p.ProID == proID)[0].DefaultPrice;
    this.productLine.Price = price;
  }

}

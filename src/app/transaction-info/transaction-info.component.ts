import { Component, OnInit } from '@angular/core';
import { ProductLine, Product, Transaction} from 'src/models';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl } from '@angular/forms';

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
  myControl = new FormControl();
  transaction: Partial<Transaction>;
  isCreating = false;

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
        this.transactionService.getTransactionById(idx).subscribe((res) => {
          this.transaction = res;
        })
      } else {
        this.transaction = {
          CardID: 1,
          TransDate: new Date(),
        };
        this.isCreating = true;
      }
    })
  }

  addProductLine() {
    this.productLines.push(this.productLine as ProductLine);
    this.productLine = {
      NumBuy: 1,
    }
    // console.log(this.productLine)
  }

  changeSelection(evt) {
    const proID = evt.value;
    const price = this.productsList.filter(p => p.ProID == proID)[0].DefaultPrice;
    this.productLine.Price = price;
  }

  getTransactionSum() {
    return this.productLines.map(pl => pl.NumBuy * pl.Price).reduce((a, b) => a+b, 0)
  }

  createTransaction() {
    this.transactionService.createTransaction(this.transaction as Transaction, this.productLines);
  }



  padzero(str, length) {
    return str.toString().padStart(length, '0');
  }

  cancel() {
    window.location.href = 'transaction'
  }

  clear() {
    this.productLines = [];
  }

  getProductName(proID: number) {
    const product = this.productsList.filter(p => p.ProID == proID)[0];
    return product && product.Name;
  }
}

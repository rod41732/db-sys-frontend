import { Component, OnInit } from '@angular/core';
import { ProductLine, Product, Transaction, Branch} from 'src/models';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl } from '@angular/forms';
import { padzero } from '../util';
import { BranchService } from '../branch.service';

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
  transaction: Partial<Transaction>;
  allBranches: Branch[];
  isCreating = false;

  constructor(
    public transactionService: TransactionService,
    public productService: ProductService,
    public branchService: BranchService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.productsList = res;
    })
    this.branchService.getAllBranches().subscribe(res => {
      this.allBranches = res;
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
          console.log("get transaction", this.transaction);
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
    const ProdID = evt.value;
    const price = this.productsList.filter(p => p.ProdID == ProdID)[0].DefaultPrice;
    this.productLine.Price = price;
  }

  getTransactionSum() {
    return this.productLines.map(pl => pl.NumBuy * pl.Price).reduce((a, b) => a+b, 0)
  }
  
  get transDate(): string {
    const date = this.transaction.TransDate;
    if (!date) return "";
    return `${padzero(date.getFullYear(), 4)}-${padzero(date.getMonth() + 1, 2)}-${padzero(date.getDate(), 2)}`;  }
    
  set transDate(date: string) {
    this.transaction.TransDate = new Date(date);
  }
  
  deleteLine(idx: number) {
    this.productLines.splice(idx, 1); 
  }
  
  createTransaction() {
    if (!this.transaction.BranchID) {
      alert("Please choose branch ID");
      return;
    } 
    if (!this.transaction.CardID) {
      alert("No Card ID Specified");
      return;
    }
    if (this.productLines.length === 0) {
      alert("No product lines added");
      return;
    }

    this.transactionService.createTransaction(this.transaction as Transaction, this.productLines).subscribe(() => {
      alert("OK");
      this.clear();
    }, err => {
      alert("Error" + err.error.message)
    });
  }
  
  cancel() {
    this.router.navigate(['transaction']);
  }

  clear() {
    this.productLines = [];
  }

  getProductName(ProdID: number) {
    const product = this.productsList.filter(p => p.ProdID == ProdID)[0];
    return product && product.ProdName;
  }
}

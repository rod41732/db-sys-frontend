import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Transaction, BranchFilter } from 'src/models';
import { TransactionService } from '../transaction.service';
import { padzero } from "../util";
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  searchFormControl = new FormControl();
  transactions: Transaction[];
  filter: BranchFilter = {};


  constructor(
    public transactionService: TransactionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((res) => {
      this.transactions = res;
    });
  }

  addTransaction() {
    this.router.navigate(['transaction', 'add'])
  }

  gotoTransaction(transID: number) {
    this.router.navigate(['transaction', transID])
  }

  deleteTransaction(transID: number) {
    this.transactionService.deleteTransaction(transID);
  }

  
  get fromDate(): string {
    const date = this.filter.FromDate;
    if (!date) return "";
    return `${padzero(date.getFullYear(), 4)}-${padzero(date.getMonth() + 1, 2)}-${padzero(date.getDate(), 2)}`;
  }

  set fromDate(date: string) {
    console.log('set', date);
    this.filter.FromDate = new Date(date);
  }
  get toDate(): string {
    const date = this.filter.ToDate;
    if (!date) return "";
    return `${padzero(date.getFullYear(), 4)}-${padzero(date.getMonth() + 1, 2)}-${padzero(date.getDate(), 2)}`;
  }

  set toDate(date: string) {
    console.log('set', date);
    this.filter.ToDate = new Date(date);
  }
  
  search() {
    this.transactionService.filterTransaction(this.filter).subscribe((res) => {
      this.transactions = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Transaction, BranchFilter } from 'src/models';
import { TransactionService } from '../transaction.service';

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
    public transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((res) => {
      this.transactions = res;
    });
  }

  addTransaction() {
    window.location.href = 'transaction/add';
  }

  gotoTransaction(transID: number) {
    window.location.href = `/transaction/${transID}`
  }

  deleteTransaction(transID: number) {
    this.transactionService.deleteTransaction(transID);
  }

  
  padzero(str, length) {
    return str.toString().padStart(length, '0');
  }

  get fromDate(): string {
    const date = this.filter.FromDate;
    if (!date) return "";
    return `${this.padzero(date.getFullYear(), 4)}-${this.padzero(date.getMonth() + 1, 2)}-${this.padzero(date.getDate(), 2)}`;
  }

  set fromDate(date: string) {
    console.log('set', date);
    this.filter.FromDate = new Date(date);
  }
  get toDate(): string {
    const date = this.filter.ToDate;
    if (!date) return "";
    return `${this.padzero(date.getFullYear(), 4)}-${this.padzero(date.getMonth() + 1, 2)}-${this.padzero(date.getDate(), 2)}`;
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

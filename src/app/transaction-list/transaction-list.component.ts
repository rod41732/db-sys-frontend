import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Transaction } from 'src/models';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  searchFormControl = new FormControl();
  transactions: Transaction[]
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

}

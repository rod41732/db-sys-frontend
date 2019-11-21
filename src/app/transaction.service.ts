import { Injectable } from '@angular/core';
import { Transaction, ProductLine} from 'src/models';
import { Observable, of } from 'rxjs';

const transactions: Transaction[] = [
  {
    TransID: 1,
    BranchID: 1,
    CardID: 1,
    Amount: 100,
    TransDate: new Date(2019, 5, 23),
  },
  {
    TransID: 2,
    BranchID: 1,
    CardID: 3,
    Amount: 129,
    TransDate: new Date(2019, 5, 25),
  },
  {
    TransID: 3,
    BranchID: 2,
    CardID: 2,
    Amount: 100,
    TransDate: new Date(2019, 5, 27),
  },
  {
    TransID: 4,
    BranchID: 3,
    CardID: 2,
    Amount: 100,
    TransDate: new Date(2019, 5, 29),
  }
]


const productLines: ProductLine[] = [
  {
    NumBuy: 1,
    Price: 50,
    ProductID: 1,
    TransID: 1,
  },
  {
    NumBuy: 2,
    Price: 100,
    ProductID: 1,
    TransID: 1,
  },{
    NumBuy: 3,
    Price: 40,
    ProductID: 1,
    TransID: 1,
  }
]

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions (): Observable<Transaction[]> {
    return of(transactions);
  }

  getProductLines(transID: number): Observable<ProductLine[]> {
    return of(productLines);
  }

  deleteTransaction(transID: number) {
    const idx = transactions.findIndex(txn => txn.TransID === transID);
    if (idx !== -1)
      transactions.splice(idx, 1);
  }

}

import { Injectable } from '@angular/core';
import { Transaction, ProductLine, BranchFilter, ResponseStatus} from 'src/models';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { map } from "rxjs/operators";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions = new BehaviorSubject<Transaction[]>([]);
  constructor(
    private apiService: ApiService,
  ) { }

  getTransactions (): Observable<Transaction[]> {
    this.filterTransaction({}).subscribe(res => {
      res.forEach(tran => tran.TransDate = new Date(tran.TransDate))
      this.transactions.next(res);
    })
    return this.transactions;
  }

  getTransactionById(transID: number): Observable<Transaction | null> {
    return this.apiService.get<Transaction>(`/transaction/${transID}`).pipe(
      map(txn => {
        console.log("transform", txn.TransDate);
        txn.TransDate = new Date(txn.TransDate);
        return txn;
      })
    );
  }

  getProductLines(transID: number): Observable<ProductLine[]> {
    return this.apiService.get(`/transaction/${transID}/productline`);
  }

  deleteTransaction(transID: number): Observable<ResponseStatus> {
    return this.apiService.delete(`/transaction/${transID}`);
  }

  createTransaction(transaction: Transaction, transProductLines: ProductLine[]): Observable<ResponseStatus> {
    return this.apiService.post(`/transaction`, {
      transaction,
      productLines: transProductLines,
    });
  }

  filterTransaction(filter: BranchFilter): Observable<Transaction[]> {
    const f = {...filter} as any; // copy lol
    if (filter.FromDate) f.FromDate = (filter.FromDate as Date).toISOString().slice(0, 10)
    if (filter.ToDate) f.ToDate = (filter.ToDate as Date).toISOString().slice(0, 10)
    return this.apiService.get<Transaction[]>('/transaction', f).pipe(
      map(txns => {
        txns.forEach(txn => txn.TransDate = new Date(txn.TransDate));
        return txns;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { resolve } from "url";
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(
    private api: ApiService,
  ) { }

  getAllBranches(): Observable<any> {
    return this.api.get('/branch');
  }

  queryBranch(term): Observable<any> {
    return this.api.post('/branch/search', { term });
  }

}

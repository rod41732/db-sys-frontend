import { Injectable } from '@angular/core';
import { resolve } from "url";
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { Branch } from 'src/models';

const baseURL = 'http://localhost:3000'

const branches: Branch[] = [
  {
    BranchID: 1,
    BranchName: 'ChonBuri Branch',
    OpenDate: new Date(2015, 8, 28),
    DailyHours: '08:00-20:00',
    Email: 'chn@digitalcafe.co.th',
    PhoneNo: '0812345678',
    StreetNo: '225 A Road',
    SubDistrict: 'Saensuk',
    District: 'Meuang',
    Province: 'ChonBuri',
    ZipCode: '20130',
  },
  {
    BranchID: 2,
    BranchName: 'Bangkok Branch',
    OpenDate: new Date(2015, 8, 28),
    DailyHours: '08:00-20:00',
    Email: 'bkk@digitalcafe.co.th',
    PhoneNo: '0812345678',
    StreetNo: '225 A Road',
    SubDistrict: 'Saensuk',
    District: 'Meuang',
    Province: 'Bangkok',
    ZipCode: '10220',
}
]

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(
    private api: ApiService,
  ) { }

  getAllBranches(): Observable<any> {
    return of(branches);
    // return this.api.get('/branch');
  }

  queryBranch(term): Observable<any> {
    return this.api.post('/branch/search', { term });
  }

  createBranch(data): Observable<any> {
    return this.api.post('/branch', data);
  }
}

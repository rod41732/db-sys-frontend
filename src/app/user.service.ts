import { Injectable } from '@angular/core';
import { Employee, ResponseStatus } from 'src/models';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';


const debug = false;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser =new BehaviorSubject<Partial<Employee> | null>(null);
  errors = new BehaviorSubject<ResponseStatus>(null);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  role = new BehaviorSubject<string>("guest");

  constructor(
    public apiService: ApiService
  ) { 
    this.currentUser.subscribe((res) => {
      if (!debug) {
        if (!res){
          this.isLoggedIn.next(false);
          this.role.next('guest');
        } else {
          this.isLoggedIn.next(true);
          this.role.next(res.IsManager ? 'manager' : 'employee')
        }
      } else {
        this.isLoggedIn.next(true);
        this.role.next('manager');
      }
    })
    if (debug) {
      this.currentUser.next({
        FirstName: 'doge',
        IsManager: true,
      })
    }
  }

  login(username: string, password: string) {
    const obs = this.apiService.post<ResponseStatus>('/employee/login', {
      username, password
    }).subscribe(res => { 
      this.status();
    }, err => {
      this.errors.next(err.error);
    })
  }

  status() {
    this.apiService.get('/employee/status').subscribe((res: any)=> {
      console.log(res);
      this.currentUser.next(res.data);
    }, err => {
      this.currentUser.next(null);
    })
  }

  logout() {
    this.apiService.get('/employee/logout').subscribe(() => {
      this.currentUser.next(null);
    });
  }
}

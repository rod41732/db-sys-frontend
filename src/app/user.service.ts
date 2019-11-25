import { Injectable } from '@angular/core';
import { Employee } from 'src/models';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser =new BehaviorSubject<Partial<Employee> | null>(null);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  role = new BehaviorSubject<string>("guest");

  constructor(
    public apiService: ApiService
  ) { 
    this.currentUser.subscribe((res) => {
      // if (!res){
      //   this.isLoggedIn.next(false);
      //   this.role.next('guest');
      // } else {
      //   this.isLoggedIn.next(true);
      //   this.role.next(res.IsManager ? 'manager' : 'employee')
      // }
      this.isLoggedIn.next(true);
      this.role.next('manager');
    })
    this.currentUser.next({
      FirstName: 'doge',
      IsManager: true,
    })
  }

  login(username: string, password: string) {
    if (username === 'manager') {
      this.currentUser.next({
        Age: 1,
        FirstName: "doge",
        IsManager: true,
      })
    } else if (username === 'employee') {
      this.currentUser.next({
        FirstName: 'normal',
        IsManager: false,
      })
    } else {
      this.currentUser.next(null);
    }
    // this.apiService.post('/login')
  }

  logout() {
    this.currentUser.next(null);
  }
}

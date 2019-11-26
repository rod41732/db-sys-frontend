import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.isLoggedIn.subscribe((res) => {
      console.log("Login state", res)
      if (res) {
        this.router.navigate(['product']);
      }
    })
    this.userService.role.subscribe((res) => {
      console.log("role state", res)
    })
    this.userService.errors.subscribe(res => {
      if (!res) return; // null initial
      alert(res.message);
    })
    this.userService.status();
  }

  login() {
    this.userService.login(this.username, this.password);
  }

}

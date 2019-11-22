import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.isLoggedIn.subscribe((res) => {
      console.log("Login state", res)
    })
    this.userService.role.subscribe((res) => {
      console.log("role state", res)
    })
  }

  login() {
    this.userService.login(this.username, this.password);
  }

}

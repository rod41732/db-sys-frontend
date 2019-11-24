import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarItemDef } from "./navbar-item";
import { UserService } from '../user.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role: string;
  isLoggedIn: boolean;

  path = '';
  ITEMS: NavBarItemDef[] = [
    {
      buttonText: 'Tranasctions',
      url: 'transaction',
      iconName: 'money',
      roles: ['manager', 'employee'],
    },
    {
      buttonText: 'Employees',
      url: 'employee',
      iconName: 'supervisor_account',
      roles: ['manager'],
    },
    {
      buttonText: 'Branch',
      url: 'branch',
      iconName: 'location_city',
    },
    {
      buttonText: 'Product',
      url: 'product',
      iconName: 'emoji_food_beverage',
    },
    {
      buttonText: 'Card',
      url: 'card',
      iconName: 'credit_card',
      roles: ['manager', 'employee'],
    },
  ]
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {     
    this.userService.isLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  ngOnInit() {
    this.route.url.subscribe((res) => {
      if (res[res.length-1]) {
        this.path = res[res.length-1].path
      } 
    })
    this.userService.role.subscribe((res) => this.role = res);
  }

  canAccess(role: string, allowedRoles: string[]) {
    if (!allowedRoles) return true; // allow by default
    else allowedRoles.indexOf(role) !== -1;
  }

  get allowedItems() {
    return this.ITEMS.filter(item => this.canAccess(this.role, item.roles));
  }

  logout() {
    this.userService.logout();
  }

}

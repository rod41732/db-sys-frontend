import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarItemDef } from "./navbar-item";
import { UserService } from '../user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role: string;

  path = '';
  ITEMS: NavBarItemDef[] = [
    {
      buttonText: 'Tranasctions',
      url: 'transaction',
      iconName: 'money'
    },
    {
      buttonText: 'Branch',
      url: 'branch',
      iconName: 'location_city'
    },
    {
      buttonText: 'Product',
      url: 'product',
      iconName: 'emoji_food_beverage'
    },
    {
      buttonText: 'Card',
      url: 'card',
      iconName: 'credit_card'
    },
    {
      buttonText: 'Logout',
      url: 'logout',
      iconName: 'exit_to_app'
    },
  ]
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {     
  }

  ngOnInit() {
    this.route.url.subscribe((res) => {
      if (res[res.length-1]) {
        this.path = res[res.length-1].path
      } 
    })
    this.userService.role.subscribe((res) => this.role = res);
  }

}

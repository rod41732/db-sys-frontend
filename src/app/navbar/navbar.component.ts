import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarItemDef } from "./navbar-item";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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
    {
      buttonText: 'Role: Admin', // TODO
      url: 'account/1', // TODO
      iconName: 'account_circle'
    }
  ]
  constructor(
    route: ActivatedRoute,
  ) { 
    route.url.subscribe((res) => {
      if (res[res.length-1]) {
        this.path = res[res.length-1].path
      } 
    })
  }

  ngOnInit() {
  }

}

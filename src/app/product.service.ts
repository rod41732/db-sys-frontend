import { Injectable } from '@angular/core';
import { Product } from "../models";
const products: Product[] = [
  {
    DefaultPrice: 50,
    Name: 'Cappucino',
    ProID: 1,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 30,
    Name: 'CoffeeCake',
    ProID: 2,
    Type: 'Dessert'
  },
  {
    DefaultPrice: 50,
    Name: 'Mocha',
    ProID: 1,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 50,
    Name: 'Latte',
    ProID: 1,
    Type: 'Beverage'
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}

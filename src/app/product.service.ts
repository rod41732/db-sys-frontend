import { Injectable } from '@angular/core';
import { Product } from "../models";
import { Observer, Observable, of } from 'rxjs';
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
    ProID: 3,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 50,
    Name: 'Latte',
    ProID: 4,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 50,
    Name: 'Cappucino',
    ProID: 5,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 30,
    Name: 'CoffeeCake',
    ProID: 6,
    Type: 'Dessert'
  },
  {
    DefaultPrice: 50,
    Name: 'Mocha',
    ProID: 7,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 50,
    Name: 'Latte',
    ProID: 8,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 50,
    Name: 'Cappucino',
    ProID: 9,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 30,
    Name: 'CoffeeCake',
    ProID: 10,
    Type: 'Dessert'
  },
  {
    DefaultPrice: 50,
    Name: 'Mocha',
    ProID: 11,
    Type: 'Beverage'
  },
  {
    DefaultPrice: 50,
    Name: 'Latte',
    ProID: 12,
    Type: 'Beverage'
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(products);
  }

  deleteItem(id: number) :boolean {
    const idx = products.findIndex(product => product.ProID === id);
    if (idx === -1) {
      return false;
    } else {
      products.splice(idx, 1);
      return true;
    }
  }

  editItem(id: number, product: Partial<Product>) {
    const idx = products.findIndex(product => product.ProID === id);
    products[idx] = {...products[idx], ...product};
  }

  createProduct(product: Product) {
    if (!product) return;
    products.push(product);
  }
}

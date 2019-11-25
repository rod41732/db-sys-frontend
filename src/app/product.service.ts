import { Injectable } from '@angular/core';
import { Product, ProductFormData } from "../models";
import { Observer, Observable, of, from, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = new BehaviorSubject<Product[]>(null);

  constructor(
    private apiService: ApiService,
  ) { }

  getProducts(): Observable<Product[]> {
    this.apiService.get('/product').subscribe(body => {
      this.products.next(body as Product[]);
    }, err => {
      console.log(err);
      alert(JSON.stringify(err));
    })

    return this.products;
  }

  async deleteItem(id: number) : Promise<any> {
    return this.apiService.delete(`/product/${id}`).toPromise();
  }

  editItem(id: number, formData: ProductFormData): Observable<any> {
    return this.apiService.put(`/product/${id}`, formData.product);
  }

  createProduct(formData: ProductFormData): Observable<any> {
    return this.apiService.post('/product', formData.product);
  }

  searchProduct(name: string, type: string): Observable<Product[]> {
    const filter: Partial<Product> = {
      ProdName: name,
      ProdType: type,
    };
    return this.apiService.get('/product', filter)
  }
}

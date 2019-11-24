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

  editItem(id: number, formData: ProductFormData) {
    this.apiService.patch(`/product/${id}`, formData.product);
  }

  createProduct(formData: ProductFormData) {
    this.apiService.post('/product', formData).subscribe(res => {
      this.getProducts().subscribe(() => {}); // refresh
    }, err => {
      console.log(err);
    })
  }

  searchProduct(name: string, type: string): Observable<Product[]> {
    const f1 = this.products.value.filter(pro => !name || (pro.Name.toLowerCase().indexOf(name.toLowerCase()) !== -1));
    console.log(f1)
    const f2 = f1.filter(pro => !type || (pro.Type.toLowerCase().indexOf(type.toLowerCase()) !== -1));
    console.log(f2)
    return of(f2);
  }
}

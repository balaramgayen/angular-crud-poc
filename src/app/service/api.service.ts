import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/productList', data);
  }

  getProduct() {
    return this.http.get<any>('http://localhost:3000/productList');
  }

  updateProduct(data: any, id: number) {
    return this.http.put('http://localhost:3000/productList/' + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete('http://localhost:3000/productList/' + id);
  }
}

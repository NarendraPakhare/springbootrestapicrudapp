import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Supplier } from '../supplier';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  productApi:string="http://localhost:9090/api/product";
  supplierApi:string="http://localhost:9090/api/supplier";
  getProduct()
  {
    return this.http.get(this.productApi);
  }

  saveProduct(p:Product)
  {
    return this.http.post(this.productApi,p);
  }

  updateProduct(p:Product)
  {
    return this.http.put(this.productApi+"/"+p.productId,p);
  }

  deleteProduct(p:Product)
  {
    return this.http.delete(this.productApi+"/"+p.productId);
  }

  getSupplier()
  {
    return this.http.get(this.supplierApi);
  }

  saveSupplier(s:Supplier)
  {
    return this.http.post(this.supplierApi,s);
  }

  deleteSupplier(s:Supplier)
  {
    return this.http.delete(this.supplierApi+"/"+s.supplierId);
  }

  updateSupplier(s:Supplier)
  {
    return this.http.put(this.supplierApi+"/"+s.supplierId,s);
  }
}

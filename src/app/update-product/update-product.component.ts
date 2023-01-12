import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(private cs:CommonService, private fb:FormBuilder, private location:Location, private router:Router){}
  updateform:FormGroup;
  supplierlist:Supplier[];
  ngOnInit()
  {
    this.updateform = this.fb.group({
      productId:[],
      productName:[''],
      productPrice:[],
      supplier:{
        supplierId:[],
        supplierName:[''],
        supplierContact:[]
      } 
    })
    this.cs.getSupplier().subscribe((supdata:Supplier[])=>this.supplierlist=supdata);
    this.editData();
  }

  editData()
  {
    let p:any = this.location.getState();
    if(p.productId != 0)
    {
      this.updateform.get('productId').setValue(p.productId);
      this.updateform.get('productName').setValue(p.productName);
      this.updateform.get('productPrice').setValue(p.productPrice);
      this.updateform.get('supplier').setValue(p.supplier);
    }
  }

  updateProduct()
  {
    this.cs.updateProduct(this.updateform.value).subscribe();
    this.router.navigate(['viewproduct']);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private cs:CommonService, private fb:FormBuilder){}
  saveform:FormGroup;
  supplierlist:Supplier[];

  ngOnInit()
  {
    this.saveform = this.fb.group({
      productId:new FormControl(),
      productName:new FormControl(),
      productPrice:new FormControl(),
      supplier:new FormControl({
        supplierId: new FormControl(),
        supplierName: new FormControl(),
        supplierContact: new FormControl()
      })
    })

    this.cs.getSupplier().subscribe((supdata:Supplier[])=>this.supplierlist=supdata);
  }
  
  saveProduct()
  {
    this.cs.saveProduct(this.saveform.value).subscribe();
    window.location.reload();
  }
}

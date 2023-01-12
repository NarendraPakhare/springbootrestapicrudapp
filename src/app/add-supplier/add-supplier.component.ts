import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  constructor(private cs:CommonService, private fb:FormBuilder){}
  saveform:FormGroup;

  ngOnInit()
  {
    this.saveform = this.fb.group({
      supplierId:new FormControl(),
      supplierName:new FormControl(),
      supplierContact:new FormControl()
    })
  }
  
  saveSupplier()
  {
    this.cs.saveSupplier(this.saveform.value).subscribe();
    window.location.reload();
  }
}

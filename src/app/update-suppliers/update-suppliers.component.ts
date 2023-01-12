import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-update-suppliers',
  templateUrl: './update-suppliers.component.html',
  styleUrls: ['./update-suppliers.component.css']
})
export class UpdateSuppliersComponent {
  constructor(private cs:CommonService, private fb:FormBuilder, private location:Location, private router:Router){}
  updateform:FormGroup;

  ngOnInit()
  {
    this.updateform = this.fb.group({
      supplierId:[],
      supplierName:[''],
      supplierContact:[]
    })

    this.editData();
  }

  editData()
  {
    let s:any = this.location.getState();
    if(s.supplierId != 0)
    {
      this.updateform.get('supplierId').setValue(s.supplierId);
      this.updateform.get('supplierName').setValue(s.supplierName);
      this.updateform.get('supplierContact').setValue(s.supplierContact);
    }
  }

  updateSupplier()
  {
    this.cs.updateSupplier(this.updateform.value).subscribe();
    this.router.navigate(['viewsupplier']);
  }
}

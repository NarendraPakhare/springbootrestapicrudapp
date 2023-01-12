import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonService } from '../shared/common.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.css']
})
export class ViewSuppliersComponent {
  constructor(private cs:CommonService){}
  supplierlist:Supplier[];

  ngOnInit()
  {
    this.cs.getSupplier().subscribe((data:Supplier[])=>this.supplierlist=data);
  }

  deleteSupplier(s:Supplier)
  {
    this.cs.deleteSupplier(s).subscribe();
    window.location.reload();
  }
}

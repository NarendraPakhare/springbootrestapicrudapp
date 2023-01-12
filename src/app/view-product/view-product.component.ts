import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private cs:CommonService){}
  productlist:Product[];

  ngOnInit()
  {
    this.cs.getProduct().subscribe((data:Product[])=>this.productlist=data);
  }

  deleteProduct(p:Product)
  {
    this.cs.deleteProduct(p).subscribe();
    window.location.reload();
  }
}

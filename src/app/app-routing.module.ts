import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AppComponent } from './app.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateSuppliersComponent } from './update-suppliers/update-suppliers.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewSuppliersComponent } from './view-suppliers/view-suppliers.component';

const routes: Routes = [
  
  {
    path:'addproduct', component:AddProductComponent
  },
  {
    path:'viewproduct', component:ViewProductComponent
  },
  {
    path:'viewproduct/updateproduct', component:UpdateProductComponent
  },
  {
    path:'addsupplier', component:AddSupplierComponent
  },
  {
    path:'viewsupplier', component:ViewSuppliersComponent
  },
  {
    path:'viewsupplier/updatesupplier', component:UpdateSuppliersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

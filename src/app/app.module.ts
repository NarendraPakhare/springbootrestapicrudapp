import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ViewSuppliersComponent } from './view-suppliers/view-suppliers.component';
import { UpdateSuppliersComponent } from './update-suppliers/update-suppliers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    AddSupplierComponent,
    ViewSuppliersComponent,
    UpdateSuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

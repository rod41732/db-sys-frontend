import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog"
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BranchInfoPage } from './branch-info-page/branch-info-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BranchListComponent,
    BranchInfoPage,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
    ProductInfoComponent,
    TransactionListComponent,
    TransactionInfoComponent,
    LoginPageComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, 
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    BranchInfoPage,
    ProductInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

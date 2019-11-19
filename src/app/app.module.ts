import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BranchInfoPage } from './branch-info-page/branch-info-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BranchListComponent,
    BranchInfoPage,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    BranchInfoPage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

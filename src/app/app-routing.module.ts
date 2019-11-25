import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BranchInfoPage } from './branch-info-page/branch-info-page.component';
import { AuthGuard } from "./auth.guard";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'branch',
    component: BranchListComponent,
  },
  {
    path: 'employee',
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee/:id',
    component: EmployeeInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'branch/:id',
    component: BranchInfoPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'transaction',
    component: TransactionListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transaction/:id',
    component: TransactionInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },{
    path: '**',
    redirectTo: '/home',
    // pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

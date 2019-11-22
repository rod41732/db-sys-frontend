import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
  import { TransactionInfoComponent } from './transaction-info/transaction-info.component';
import { LoginPageComponent } from './login-page/login-page.component';


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
    path: 'transaction',
    component: TransactionListComponent,
  },
  {
    path: 'transaction/:id',
    component: TransactionInfoComponent,
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

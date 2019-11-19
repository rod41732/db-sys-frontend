import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'branch',
    component: BranchListComponent,
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

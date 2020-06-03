import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VendingmachineComponent } from './vendingmachine/vendingmachine.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { BrowseComponent } from './browse/browse.component';
import { MyVendingmachineComponent } from './my-vendingmachine/my-vendingmachine.component';
=======
import { IndividualVMComponent } from './individual-vm/individual-vm.component';
>>>>>>> 53a9cc6bbbab7d9d9998cb09c3c3a15e06f038ed

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'vendingmachine',
    component: VendingmachineComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
<<<<<<< HEAD
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'myvendingmachine',
    component: MyVendingmachineComponent
=======
    path: 'individualVM',
    component: IndividualVMComponent
>>>>>>> 53a9cc6bbbab7d9d9998cb09c3c3a15e06f038ed
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

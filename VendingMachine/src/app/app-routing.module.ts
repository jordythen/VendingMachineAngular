import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VendingmachineComponent } from './vendingmachine/vendingmachine.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { IndividualVMComponent } from './individual-vm/individual-vm.component';

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
    path: 'individualVM/:vmID',
    component: IndividualVMComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

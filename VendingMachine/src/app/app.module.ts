import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { VendingmachineComponent } from './vendingmachine/vendingmachine.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlService } from './url.service';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MakeofferComponent } from './makeoffer/makeoffer.component';
import { ViewofferComponent } from './viewoffer/viewoffer.component';
import { IndividualVMComponent } from './individual-vm/individual-vm.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    VendingmachineComponent,
    AccountComponent,
    RegisterComponent,
    MakeofferComponent,
    ViewofferComponent,
    IndividualVMComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UrlService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { newPassComponent } from './newPass/newPass.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { forgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { signUpCodeComponent } from './signUpCode/signUpCode.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  { path: '', component:LoginComponent },
  // { path: '', component:Page2Component },
  { path: 'signUpCode', component:signUpCodeComponent,canActivate:[AuthGuard]},
  { path: 'forgetPassword', component:forgetPasswordComponent },
  { path: 'newPass', component:newPassComponent },
  { path: '', component:signUpCodeComponent },
  { path : 'home', component: HomeComponent}
  // { path: '**', component:LoginComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    forgetPasswordComponent,
    signUpCodeComponent,
    newPassComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule

    

  ],
  exports: [MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

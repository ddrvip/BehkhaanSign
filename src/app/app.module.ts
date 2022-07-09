import { NotFoundComponent } from './not-found/not-found.component';
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
  { path: 'signUpCode', component:signUpCodeComponent},
  { path: 'forgetPassword', component:forgetPasswordComponent },
  { path: 'newPass', component:newPassComponent },
  { path: 'layout', component: HomeComponent, canActivate:[AuthGuard]},
  { path: '**', component:NotFoundComponent }, 
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
  exports: [],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

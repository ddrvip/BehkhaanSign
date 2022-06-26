import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: Boolean = false;
  login: any;
  logout: any;
  checkAuth: any;

  public isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }
  public chechAuth() {
    return this.loggedIn
  }

  public loginFn(value: any) {
    this.loggedIn = true;
    localStorage.setItem('fname', value.fname);
    localStorage.setItem('lname', value.lname);
    localStorage.setItem('age', value.age);
    localStorage.setItem('pswrd', value.pswrd);
  }
  public logoutFn() {
    this.loggedIn = false;
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    localStorage.removeItem('age');
    localStorage.removeItem('pswrd');
  }
}

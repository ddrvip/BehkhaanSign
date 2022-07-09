import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetPassword',
  templateUrl:'./forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css'],
})
export class forgetPasswordComponent implements OnInit {
  signIn: any;
  showPassword: boolean = false;
  status: boolean = false;
  forgetForm: FormGroup;
  bgColor: boolean = true;
  users: any;
  constructor(
    
    private fb: FormBuilder,
    private AccountService : AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
this.forgetForm = this.fb.group({
  phoneNumber: ['', [Validators.required,Validators.pattern('^[0]{1}[9]{1}[0-9]{9}$')]]
});

  }

  submit(){
    this.AccountService.ForgetPassword(this.forgetForm.value.phoneNumber).subscribe(res => {
      if(!res.hasError){
        localStorage.removeItem('phoneNumber');
        localStorage.setItem('phoneNumber', this.forgetForm.value.phoneNumber);
        localStorage.setItem('ok', '200');
        this.router.navigate(['signUpCode']);
      }
    })
  }
}

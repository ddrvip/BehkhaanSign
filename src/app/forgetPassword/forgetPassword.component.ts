import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetPassword',
  templateUrl:'./forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css'],
  providers: [LoggingService]
})
export class forgetPasswordComponent implements OnInit {
  signIn: any;
  showPassword: boolean = false;
  status: boolean = false;
  forgetForm: FormGroup;
  bgColor: boolean = true;
  users: any;
  constructor(
    
    private loggingService: LoggingService,
    private fb: FormBuilder,
    private AccountService : AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
this.forgetForm = this.fb.group({
  phoneNumber: ['', [Validators.required,Validators.pattern('^[0]{1}[9]{1}[0-9]{9}$')]]
});
    this.loggingService.getAllUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    })
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

import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AnyForUntypedForms, FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { AccountModel } from '../account.model';
@Component({
  selector: 'app-signUpCode',
  templateUrl: './signUpCode.component.html',
  styleUrls: ['./signUpCode.component.css'],
  providers: [LoggingService]
})
export class signUpCodeComponent implements OnInit {
  signIn: any;
  showPassword: boolean = false;
  status: boolean = false;
  regCode: any;
  bgColor: boolean = true;
  users: any;
  phoneNumber: any;
  userName: any;
  firstName: any;
  pass: any;
  confirmCode: any;
  account: AccountModel = new AccountModel();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loggingService: LoggingService,
    private accountService: AccountService
    
  ) { }

  ngOnInit(): void {
    this.regCode = this.fb.group({
      
      
      rCode: ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{4}$')])],
      
  })

    this.confirmCode = localStorage.getItem('confirmCode');
    this.phoneNumber = localStorage.getItem('phoneNumber');
    this.userName = localStorage.getItem('userName');
    this.firstName = localStorage.getItem('firstName');
    this.pass = localStorage.getItem('password');
  }

  public log() {
    console.log(this.loggingService.title);

    this.loggingService.log("Log from forgetPassword");
  }

  public onChange(event: Event) {
    this.loggingService.title = (event.target as HTMLInputElement).value;
  }

  submit(){
    this.accountService.PhoneNumberVerification(this.regCode.value.rCode, this.phoneNumber).subscribe(res => {
      if(!res.hasError){
        this.account.password = this.pass;
        this.account.confirmPassword = this.pass
        this.account.code = this.regCode.value.rCode;
        this.account!.user!.firstname = this.firstName;
        this.account!.user!.username = this.userName;
        this.account!.user!.phoneNumber  = this.phoneNumber; 
        if(!localStorage.getItem('ok')){
          this.accountService.Register(this.account).subscribe(res => {
            if(!res.hasError){
              alert(this.firstName + 'ثبت نام با موفقیت انجام شد');
              this.router.navigate(['']);
            }
          })
        }else{
          localStorage.removeItem('code');
          localStorage.setItem('code', this.regCode.value.rCode);
          this.router.navigate(['newPass']);
        }
        localStorage.removeItem('ok');
      }
    })
  }

}
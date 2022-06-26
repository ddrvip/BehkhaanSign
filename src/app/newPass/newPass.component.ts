import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newPass',
  templateUrl:'./newPass.component.html',
  styleUrls: ['./newPass.component.css'],
})
export class newPassComponent implements OnInit {
  showPassword: boolean = false;
  status: boolean = false;
  newPass: any;
  bgColor: boolean = true;
  users: any;
  phoneNumber: any;
  confirmpass: any;
  code: any;
  constructor(
    private fb : FormBuilder,
    private AccountService : AccountService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.newPass = this.fb.group({
      pass: ['',Validators.required],
      confirm: ['',Validators.required],
  })

  this.phoneNumber = localStorage.getItem('phoneNumber');
  this.code = localStorage.getItem('code');
}



  submit(){

 this.AccountService.ConfirmForgottenPassword(this.phoneNumber,this.newPass.value.pass,this.newPass.value.confirm,this.code).subscribe(res => {
  if(!res.hasError){
    alert('تغییر رمز عبور با موفقیت انجام شد');
    this.router.navigate(['']);
  }

    
})
}
}
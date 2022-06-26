import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountModel } from '../account.model';

import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';
import { LoggingService } from '../logging.service';
import { SignInService } from '../signIn.service';
@Component({
    selector: 'login-user',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ LoggingService ]

})
export class LoginComponent implements OnInit {
signIn: any;
showPassword: boolean = false;
status: boolean = false;
signForm : any;
bgColor : boolean  = true;
errorUserName: boolean = false;


account: AccountModel = new AccountModel();
constructor(private fb:FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loggingService: LoggingService,
    private accountService: AccountService,
    private signInService: SignInService
    ){

}
ngOnInit(): void {

    

    this.signForm = this.fb.group({
        fname: ['',Validators.required],
        lname: ['',Validators.required],
        phoneNumber: ['',Validators.compose([Validators.required,Validators.pattern('^[0]{1}[9]{1}[0-9]{9}$')])],
        pswrd: ['',[Validators.required,Validators.minLength(6)]],
    })


    this.signIn = this.fb.group({
        lname: ['',Validators.required],
        pswrd: ['',Validators.required],
    })


    // this.loggingService.getAllUsers().subscribe(res => {
    //     console.log(res);
        
    // })

}
submit(){

 
// this.authService.loginFn(this.signForm.value.fname);
this.account.password = this.signForm.value.pswrd;
this.account.confirmPassword = this.signForm.value.pswrd;
this.account!.user!.firstname = this.signForm.value.fname;
this.account!.user!.username = this.signForm.value.lname;
this.account!.user!.phoneNumber  = this.signForm.value.phoneNumber; 


this.accountService.CheckIfExistsAndConfirmed(this.account).subscribe(res =>{
    if(!res.hasError){
        if(res.result == 2){
            this.accountService.RequestForPhoneNumberVerification(this.signForm.value.phoneNumber).subscribe(res => {
                if(!res.hasError){
             localStorage.setItem('confirmCode', res.result); 
             localStorage.removeItem('phoneNumber');
             localStorage.setItem('phoneNumber', this.signForm.value.phoneNumber);
             localStorage.setItem('userName', this.signForm.value.lname);
             localStorage.setItem('password', this.signForm.value.pswrd);
             localStorage.setItem('firstName', this.signForm.value.fname);
                this.router.navigate(['signUpCode']);      
                }
            })
        }else if(res.result == 0){
            this.router.navigate(['']);
        }
    }
});


 

}

checkUsername(){

    if(this.signForm.value.lname.length > 2){
    let tt = setTimeout(() => {
        this.accountService.CheckDuplicateUsername(this.signForm.value.lname).subscribe(res =>{
            if (res.result){
                this.errorUserName = true;
            }else{
                this.errorUserName = false;
            }
            
        })
    },1000);
    }
    



}

login(){
    this.signInService.signin(this.signIn.value.lname, this.signIn.value.pswrd).subscribe(res => {
        if(!res.hasError){
             this.router.navigate(['home']);
        } 
    })
}

 





}
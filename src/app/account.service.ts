import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AccountModel } from "./account.model";
@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private http: HttpClient) { }
    serviceUrl: string = 'https:\\test-auth.behkhaan.ir:4343/api';




    CheckDuplicateUsername(userName: string): Observable<any> {
        return this.http.get<any>(`${this.serviceUrl}/Account/CheckDuplicateUsername/${userName}`);
    }

    CheckIfExistsAndConfirmed(body: AccountModel): Observable<any> {
        return this.http.post<any>(`${this.serviceUrl}/Account/CheckIfExistsAndConfirmed`, null);
    }

    Register(body: AccountModel): Observable<any> {

        return this.http.post<any>(`${this.serviceUrl}/Account/Register`, body);
    }
    RequestForEmailActivation(body: any) {

        return this.http.post(`${this.serviceUrl}/Account/RequestForEmailActivation`, body);
    }
    EmailActivation(body: any) {

        return this.http.post(`${this.serviceUrl}/Account/EmailActivation`, body);
    }
    RequestForPhoneNumberActivation(body: any) {

        return this.http.post(`${this.serviceUrl}/Account/RequestForPhoneNumberActivation`, body);
    }
    PhoneNumberActivation(body: any) {

        return this.http.post(`${this.serviceUrl}/api/Account/PhoneNumberActivation`, body);
    }
    RequestForPhoneNumberVerification(phoneNumber: any): Observable<any> {
 let body = {
     phoneNumber : phoneNumber
 };
        return this.http.post<any>(`${this.serviceUrl}/Account/RequestForPhoneNumberVerification`, body);
    }
    PhoneNumberVerification(code: string, phoneNumber: string): Observable<any> {
        let body = {
            phoneNumber : phoneNumber,
            code : code.toString(),
        };
        return this.http.post<any>(`${this.serviceUrl}/Account/PhoneNumberVerification`, body);
    }
    ForgetPassword(phoneNumber: any): Observable<any> {
        let body = {
            phoneNumber : phoneNumber,
        }
    
        return this.http.post<any>(`${this.serviceUrl}/Account/ForgetPassword`, body);
    }
    ConfirmForgottenPassword(phoneNumber: string,pass:string,confirmpass:string,code:string): Observable<any> {
        let body = {
            phoneNumber : phoneNumber,
            password: pass,
            confirmPassword: confirmpass,
            code: code
        }
    
        return this.http.post<any>(`${this.serviceUrl}/Account/ConfirmForgottenPassword`, body);
    }
    ChangePassword(body: any) {

        return this.http.post(`${this.serviceUrl}/Account/ChangePassword`, body);
    }
    ChangePasswordByAdmin(body: any) {

        return this.http.post(`${this.serviceUrl}/Account/ChangePasswordByAdmin`, body);
    }
    ResetPasswordByAdmin(userId: string) {

        return this.http.get(`${this.serviceUrl}/Account/ResetPasswordByAdmin/${userId}`);
    }

}


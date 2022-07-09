import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})

export class SignInService{

    constructor(
        private http: HttpClient
    ){}
    serviceUrl: string = 'https:\\test-auth.behkhaan.ir:4343';
signin(userName: string, password: string): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    const data = `client_id=api.angular.client&client_secret=secret&scope=IdentityServerApi customer shelve genre like comment rate review activity follow friendRequest friend file author book publisher notification offline_access&grant_type=password&username=${userName}&password=${password}`;
    return this.http.post<any>(`${this.serviceUrl}/connect/token`, data, httpOptions);
}

}
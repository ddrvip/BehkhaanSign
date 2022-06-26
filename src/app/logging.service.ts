import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn:'root'})
export class LoggingService {
constructor(private http:HttpClient) {}

    public title:string = "default";

    public log(message: string) {
        console.log(message);
        
    }

    getAllUsers() {
return this.http.get('https://api.github.com/users');
    }
}


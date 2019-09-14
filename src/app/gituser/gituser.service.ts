import { GITUSER } from './../shared/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class GitService {
    constructor( private http: HttpClient ) {}

    getUserDetails(): Observable<any> {
        return this.http.get(GITUSER);
    }
}
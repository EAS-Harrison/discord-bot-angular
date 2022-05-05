import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable()
export class ConfigService {
    private url = 'http://localhost:3000/api/frontend/facts,random'
    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get(this.url);
    }
}
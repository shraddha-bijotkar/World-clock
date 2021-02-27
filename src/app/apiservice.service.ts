import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from './time';
import * as Rx from "rxjs/Rx";

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Times } from './times';
import { Locat } from './locat' ;
import { New } from './new';
import { HttpmsgService } from './httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient , private httpmsg : HttpmsgService) {}
  postVal(Location : string) : Observable <any> {
    return this.httpClient.post<New[]>('http://localhost:5000/', Location)
    .pipe(catchError(this.httpmsg.handleError));
  }

  getUsers() : Observable<Times[]> {
    return this.httpClient.get<Times[]>('http://localhost:5000/', {headers: this.headers})
    .pipe(catchError(this.httpmsg.handleError));
   
  } 
  getloc() : Observable<Locat[]> {
    return this.httpClient.get<Locat[]>('http://localhost:5000/locations', {headers: this.headers})
    .pipe(catchError(this.httpmsg.handleError));
   
  }
  
}

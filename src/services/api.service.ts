import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  const apiUrl = "http://localhost:8080/api/";

export class ApiService {
  
    constructor(private http: HttpClient) { }

    getItems() {

    }

    getItem() {
        
    }


}

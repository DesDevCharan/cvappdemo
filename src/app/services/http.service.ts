import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from '../utils/endpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(environment.apiUrl + ENDPOINT.getEmployees);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  // set request header
  private reqHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'test-header': 'hi-header'
    })
  }

  // set request body
  private reqBody = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postData() {
    return this.http.post(this.apiUrl, this.reqBody, this.reqHeader)
  }

}

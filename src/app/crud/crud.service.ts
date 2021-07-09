import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  testConnection(): Observable<any> {
    return this.http.get(environment.url, {responseType: 'text'});
  };
}

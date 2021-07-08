import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private http;
  constructor(http: HttpClient) {
    this.http = http;
  }

  testConnection(): any {
    try {
      this.http.get<any>(environment.api)
        .subscribe(response => { return response });
    } catch (error) {
      return error;
    }
  };
}

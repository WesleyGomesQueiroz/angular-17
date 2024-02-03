import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  GetAllUser() {
    return this.httpClient.get(`https://localhost:44338/api/CRUD/GetAllUser`);
  }
}

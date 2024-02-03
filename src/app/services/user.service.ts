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

  create(user: any) {
    return this.httpClient.post(`https://localhost:44338/api/CRUD/Create`, user);
  }

  update(user: any) {
    return this.httpClient.put(`https://localhost:44338/api/CRUD/Update`, user);
  }
}

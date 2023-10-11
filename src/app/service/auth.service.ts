import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseApi = 'http://localhost:3000/user';
  getAll() {
    return this.http.get(this.baseApi);
  }

  getById(id: any) {
    return this.http.get(`${this.baseApi}/${id}`);
  }

  registerData(inputdata: any) {
    return this.http.post(this.baseApi, inputdata);
  }

  updateData(id: number, inputdata: any) {
    return this.http.put(`${this.baseApi}/${id}`, inputdata);
  }
}

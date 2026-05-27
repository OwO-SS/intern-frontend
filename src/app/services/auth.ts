import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5217/api/Auth';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }

  saveLoginData(res: any) {
    const token = res.token;
    localStorage.setItem('token', token);

    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload);

    const role =
      payload.role ||
      payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    const fullName =
      payload.fullName ||
      payload.name ||
      payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
      payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];

    localStorage.setItem('fullName', fullName || 'User');
    localStorage.setItem('role', role || 'Unknown');
  }

  getFullName() {
    return localStorage.getItem('fullName');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    localStorage.removeItem('role');
  }
}
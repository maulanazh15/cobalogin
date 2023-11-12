import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token-saya'; 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    this.loadToken();
  }

  loadToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  apiURL = () => 'https://api-auth.dalhaqq.xyz';

  logout() {
    localStorage.clear();
    return true;
  }
}
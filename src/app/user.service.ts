import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}
  storeLoggedInData(email: string, username: string) {
    return this.http.post(this.baseUrl, { email, username });
  }
  getRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }
  getDetails():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }
  addRegistration(registration: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, registration);
  }

  updateRegistration(registration: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/user/update/:username`, registration);
  }

  deleteRegistration(username: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/user/registration/${username}`);
  }
    // Method to handle user registration
    register(user: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/register`, user);
    }
  
    // Method to handle user login
    login(credentials: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/login`, credentials);
    }
}

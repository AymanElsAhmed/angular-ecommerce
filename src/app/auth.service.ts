import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../app/auth-data.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token?: string;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createuser(name: string, email: string, password: string) {
    const authData: AuthData = { name: name, email: email, password: password };
    // this.http.get('https://fakestoreapi.com/products').subscribe((response)=>{
    //   console.log(response);

    // })
    this.http
      .post('http://localhost:7000/user', authData)
      .subscribe((response) => {
        console.log(response);
      });
  }
  loginuser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post<{ token: string }>('http://localhost:7000/user/login', authData)
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        this.authStatusListener.next(true);
      });
  }
}

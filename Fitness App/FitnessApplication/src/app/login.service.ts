import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = 'http://localhost:9003';
  public LOGIN = this.API + '/Usuario/login';

  constructor(private http: HttpClient) { }

  getLogin() {
    return this.http.get(this.LOGIN+"?user=Raul&pw=Raul");
  }

}

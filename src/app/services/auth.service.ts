import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Signup } from '../login/signup/signup';


@Injectable()
export class AuthService {

  private usuarioAutenticado: Boolean = false;

  constructor(private router: Router, private http: Http) { }

  _auth(candidate: Signup) {
    this.usuarioAutenticado = true;
    const url = `http://localhost:3000/api/users/login`;
    const headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.post(url, candidate, {headers : headers})
      .map((response: Response) =>  response.json())
      .catch((error: Response) =>  Observable.throw(error.json()));
  }

  _logout() {
    localStorage.clear();
  }

  usuarioEstaAutenticado(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token') ? `?token=${localStorage.getItem('token')}` : '';
    const url = `http://localhost:3000/api/users/authenticated/${token}`;
    return this.http.get(url)
    .map(() => true)
    .catch(() => {
      // this is executed on a 401 or on any error
      this.router.navigate(['/login']);
      return Observable.of(false);
    });
  }

}

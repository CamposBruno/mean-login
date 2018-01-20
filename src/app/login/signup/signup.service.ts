import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


import { Signup } from './signup';

@Injectable()
export class SignupService {

  private url: string  = '/api/users';

  constructor(private http: Http) { }

  _signup(signupUser: Signup) {
    const body: string = JSON.stringify(signupUser);
    const options = {
      headers: new Headers({'Content-Type' : 'application/json'})
    };
    return this.http.post(this.url, body, options)
      .map((response: Response) => response.json())
      .catch((error: Response) =>  Observable.throw(error.json()));
  }
}

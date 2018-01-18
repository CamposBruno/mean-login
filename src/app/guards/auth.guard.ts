import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AuthService } from '../services/auth.service';





@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private http: Http) { }

  canActivate( router: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean {
    return this.authService.usuarioEstaAutenticado();
  }


}

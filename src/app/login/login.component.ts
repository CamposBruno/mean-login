import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Signup } from './signup/signup';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageName: String = 'Login';

  loginCandidate: Signup = new Signup();


  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.authService._auth(this.loginCandidate)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.toastr.success(data.message, data.title);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        },
        error => {
          this.toastr.error(error.err.message, error.title);
        }
      );
  }

}

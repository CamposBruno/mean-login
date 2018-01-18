import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from './signup.service';
import { Signup } from './signup';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: Signup = new Signup();

  constructor(
    private signupService: SignupService,
    private router: Router,
    private toastr: ToastsManager) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.signupService._signup(this.signup)
      .subscribe(
        json => {
          this.toastr.success(json.message, json.title);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        error => {
          let errorMessage = 'Error';
          if (error.err.email) {
            errorMessage = 'Email addres error. ' + error.err.email.msg;
          }
          this.toastr.error(errorMessage, error.title);

        }
      );
  }

}

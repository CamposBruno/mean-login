import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ],
  providers : [SignupService],
  declarations: [LoginComponent, SignupComponent]
})
export class LoginModule { }

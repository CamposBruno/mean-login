import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { NgModule } from '@angular/core';

import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home.routing.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    LoginModule,
    HomeModule,
    HomeRoutingModule,
    routing
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

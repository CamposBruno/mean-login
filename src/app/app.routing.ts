
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';




const APP_ROUTES: Routes = [
    { path : '', redirectTo: 'home', pathMatch : 'full', canActivate : [AuthGuard]},
    { path : 'login' , component : LoginComponent},
    { path : 'signup' , component : SignupComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

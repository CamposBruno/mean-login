import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const home_routes: Routes = [
    { path : 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
        { path : 'page-one', component: PageOneComponent, canActivateChild: [AuthGuard]},
        { path : 'page-two', component: PageTwoComponent, canActivateChild: [AuthGuard]}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(home_routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

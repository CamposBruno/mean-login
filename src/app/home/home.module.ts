import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { MainMenuModule } from '../main-menu/main-menu.module';
import { HomeRoutingModule } from './home.routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';



@NgModule({
  imports: [
    CommonModule,
    MainMenuModule,
    HomeRoutingModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  providers: [

  ]
})
export class HomeModule { }

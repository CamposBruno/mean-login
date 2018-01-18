import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainMenuComponent
  ],
  providers: [
  ],
  declarations: [MainMenuComponent]
})
export class MainMenuModule { }

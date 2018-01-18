import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private toastr: ToastsManager, private vr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(this.vr);
  }
}

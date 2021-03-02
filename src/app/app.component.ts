import { Component, VERSION } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router: Router) {}

  btnHal1() {
    this.router.navigate(['hal1'])
  }
  btnHal2() {
    this.router.navigate(['hal1'])
  }
  btnHal3() {
    this.router.navigate(['hal1'])
  }
}
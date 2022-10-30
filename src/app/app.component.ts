import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestProject';
  RouteTitle: string = 'Dashboard';
  btnPressed: boolean = false;

  btnclick() {
    this.btnPressed = !this.btnPressed;
  }

  setTitle(name: string) {
    this.RouteTitle = name;
  }
}

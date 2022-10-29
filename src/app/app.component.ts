import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestProject';
  btnPressed: boolean = false;

  btnclick() {
    this.btnPressed = !this.btnPressed;
  }
}

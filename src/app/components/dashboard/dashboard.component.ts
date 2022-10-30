import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  calculated!: number;
  height!: number;
  width!: number;
  weight!: number;

  constructor() {}

  ngOnInit(): void {}

  btnCalculate() {
    this.calculated = this.width + this.height;
  }
  btnSendMail() {}
}

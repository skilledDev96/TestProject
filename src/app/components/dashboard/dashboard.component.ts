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
  good: boolean = false;
  notGood: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  btnCalculate() {
    this.calculated = this.weight / this.height / this.height;
    if (this.calculated < 25) {
      this.good = true;
      this.notGood = false;
    } else {
      this.good = false;
      this.notGood = true;
    }
  }
  btnSendMail() {}
}

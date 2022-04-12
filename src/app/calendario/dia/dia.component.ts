import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.scss'],
})
export class DiaComponent implements OnInit {
  dia = {
    dia: 31,
    mes: 'Enero',
  };
  constructor() {}

  ngOnInit(): void {}

  goToPreviousDay() {
    this.dia.dia--;
  }

  goToNextDay() {
    this.dia.dia++;
  }
}

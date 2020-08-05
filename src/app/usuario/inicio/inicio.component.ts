import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  columnastotales: number = 2;
  columnasizquierda: number = 1;
  columnasderecha: number = 1;
  altocontenido: number = 0;
  panelDerecha: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.verificarTamanos();
  }

  onResize(event) {
    this.verificarTamanos();
  }

  verificarTamanos() {
    this.altocontenido = window.innerHeight;
    if (window.innerWidth > 1800) {
      this.columnastotales = 12;
      this.columnasizquierda = 2;
      this.columnasderecha = 10;
    } else if (window.innerWidth > 1200) {
      this.columnastotales = 12;
      this.columnasizquierda = 3;
      this.columnasderecha = 9;
    } else if (window.innerWidth > 700) {
      this.columnastotales = 8;
      this.columnasizquierda = 3;
      this.columnasderecha = 5;
    } else if (window.innerWidth > 480) {
      this.columnastotales = 8;
      this.columnasizquierda = 4;
      this.columnasderecha = 4;
    } else {
      this.columnastotales = 1;
      this.columnasizquierda = 1;
      this.columnasderecha = 0;
    }
  }

  mostarPanelDerecha() {
    this.panelDerecha = true;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-panel-derecha',
  templateUrl: './panel-derecha.component.html',
  styleUrls: ['./panel-derecha.component.scss'],
})
export class PanelDerechaComponent implements OnInit {
  @Input() usuario: Usuario;
  lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor() {}

  ngOnInit(): void {}
}

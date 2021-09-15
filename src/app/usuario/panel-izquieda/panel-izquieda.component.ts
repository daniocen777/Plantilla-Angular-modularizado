import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-panel-izquieda',
  templateUrl: './panel-izquieda.component.html',
  styleUrls: ['./panel-izquieda.component.scss'],
})
export class PanelIzquiedaComponent implements OnInit {
  @Output() onClickMostrarPanelDerecha = new EventEmitter<Usuario>();
  user1 = {
    id: 1,
    nombre: 'Lola',
    apellido: 'Acuña',
    correo: 'lolita@gmail.com',
  };

  user2 = {
    id: 2,
    nombre: 'María',
    apellido: 'Llena de Gracia',
    correo: 'mari@outlook.com',
  };

  user3 = {
    id: 3,
    nombre: 'Pedro',
    apellido: 'Querétaro',
    correo: 'pepe@gmail.com',
  };
  user4 = {
    id: 4,
    nombre: 'Pedro',
    apellido: 'Querétaro',
    correo: 'pepe@gmail.com',
  };
  usuarios: Usuario[] = [];

  constructor() {
    this.usuarios.push(this.user1);
    this.usuarios.push(this.user2);
    this.usuarios.push(this.user3);
    this.usuarios.push(this.user4);
  }

  ngOnInit(): void {}

  mostrarPanelDerecha(usuario: Usuario) {
    console.log(usuario);
    this.onClickMostrarPanelDerecha.emit(usuario);
  }
}

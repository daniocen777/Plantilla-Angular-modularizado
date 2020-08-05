export class Usuario {
  public id: number;
  public nombre: string;
  public apellido: string;
  public correo: string;

  constructor(obj: DataObj) {
    this.id = (obj && obj.id) || null;
    this.nombre = (obj && obj.nombre) || null;
    this.apellido = (obj && obj.apellido) || null;
    this.correo = (obj && obj.correo) || null;
  }
}

interface DataObj {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
}

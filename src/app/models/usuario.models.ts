export class Usuarios{
    usuarioID: number;
    nombre : string;
    correo : string;
    telefono : string;
    contraseniaUsuario : string;
    rolID : number;
    constructor() {
    this.usuarioID = 0;
    this.nombre = '';
    this.correo = '';
    this.telefono = '';
    this.contraseniaUsuario = '';
    this.rolID = 1;
    }
}
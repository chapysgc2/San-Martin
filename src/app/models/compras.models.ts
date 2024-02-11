export class Compras{
    compraID: number;
    usuarioID : number;
    fecha : string;
    total : number;
    constructor() {
    this.compraID = 0;
    this.usuarioID = 0;
    this.total = 0;
    this.fecha = '';
    }
}
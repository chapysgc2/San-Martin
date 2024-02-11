export class SeguimientoPedidos{
    seguimientoID: number;
    usuarioID : number;
    compraID : number;
    estado : string;
    constructor() {
    this.seguimientoID = 0;
    this.usuarioID = 0;
    this.compraID = 0;
    this.estado = '';
    }
}
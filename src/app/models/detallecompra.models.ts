export class DetalleCompra{
    detallecompraID: number;
    compraID : number;
    productoID : number;
    cantidad : number;
    subtotal : number;
    constructor() {
    this.detallecompraID = 0;
    this.compraID = 0;
    this.productoID = 0;
    this.cantidad = 0;
    this.subtotal  = 0;
    }
}
export class Producto{
    productoID: number;
    nombre : string;
    descripcion: string;
    precio: number;
    color: string;
    especificaciones: string;
    stock: number;
    constructor() {
    this.productoID = 0;
    this.nombre= '';
    this.descripcion = '';
    this.precio = 0;
    this.color = '';
    this.especificaciones = '';
    this.stock = 0;
    }
}
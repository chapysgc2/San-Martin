export class Producto{
    productoID: number;
    nombre : string;
    descripcion: string;
    precio: number;
    color: string;
    especificaciones: string;
    stock: number;
    
    constructor() {
        this.productoID = 1;
        this.nombre= 'Pintura chingona';
        this.descripcion = 'Pintura pa los más chingones';
        this.precio = 666;
        this.color = 'Negra';
        this.especificaciones = 'Usese con precaución';
        this.stock = 2;
    }
    
}
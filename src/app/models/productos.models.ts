export class Producto{
    productoID: number;
    nombre : string;
    descripcion: string;
    precio: number;
    color: string;
    especificaciones: string;
    stock: number;
    imagen: string;
    
    constructor() {
        this.productoID = 1;
        this.nombre= 'Pintura chingona';
        this.descripcion = 'Pintura pa los más chingones';
        this.precio = 666;
        this.color = 'Negra';
        this.especificaciones = 'Usese con precaución';
        this.stock = 2;
        this.imagen = 'https://pintumex.com.mx/tienda/wp-content/uploads/2021/04/Tr%C3%A1fico.jpg';
    }
    
}
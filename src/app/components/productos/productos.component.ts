import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.models';
import { ProductosService } from 'src/app/services/productos.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productosService: ProductosService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarProductos(): void {
    this.productosService.mostrarProductos().subscribe((data: any) => {
      console.log('Productos mostrados:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar los productos:', error);
    });
  }

  mostrarProducto(productoID: number): void {
    this.productosService.mostrarProducto(productoID).subscribe((data: any) => {
      console.log('Producto mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el producto:', error);
    });
  }

  crearProducto(productoNuevo: Producto): void {
    this.productosService.crearProducto(productoNuevo).subscribe((data: any) => {
      console.log('Producto creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el producto:', error);
    });
  }

  eliminarProducto(productoID: number): void {
    this.productosService.eliminarProducto(productoID).subscribe((data: any) => {
      console.log('Producto eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el producto:', error);
    });
  }

  actualizarProducto(productoID: number, productoNuevo: Producto): void {
    this.productosService.actualizarProducto(productoID, productoNuevo).subscribe((data: any) => {
      console.log('Producto actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el producto:', error);
    });
  }

}

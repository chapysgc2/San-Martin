import { Component, OnInit } from '@angular/core';
import { DetalleCarrito } from 'src/app/models/detallecarrito.models';
import { DetalleCarritoService } from 'src/app/services/detallecarrito.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-detallecarrito',
  templateUrl: './detallecarrito.component.html',
  styleUrls: ['./detallecarrito.component.css']
})
export class DetalleCarritoComponent implements OnInit {

  constructor(private detalleCarritoService: DetalleCarritoService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarDetalleCarrito(detallecarritoID: number): void {
    this.detalleCarritoService.mostrarDetalleCarrito(detallecarritoID).subscribe((data: any) => {
      console.log('Detalle del carrito mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el detalle del carrito:', error);
    });
  }

  crearDetalleCarrito(detallecarritoNuevo: DetalleCarrito): void {
    this.detalleCarritoService.crearDetalleCompra(detallecarritoNuevo).subscribe((data: any) => {
      console.log('Detalle del carrito creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el detalle del carrito:', error);
    });
  }

  eliminarDetalleCarrito(detallecarritoID: number): void {
    this.detalleCarritoService.eliminarDetalleCarrito(detallecarritoID).subscribe((data: any) => {
      console.log('Detalle del carrito eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el detalle del carrito:', error);
    });
  }

  actualizarDetalleCarrito(detallecarritoID: number, detallecarritoNuevo: DetalleCarrito): void {
    this.detalleCarritoService.actualizarDetalleCarrito(detallecarritoID, detallecarritoNuevo).subscribe((data: any) => {
      console.log('Detalle del carrito actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el detalle del carrito:', error);
    });
  }

}

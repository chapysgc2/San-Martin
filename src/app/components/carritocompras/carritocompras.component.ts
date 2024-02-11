import { Component, OnInit } from '@angular/core';
import { CarritoCompras } from 'src/app/models/carritocompras.models';
import { CarritoComprasService } from 'src/app/services/carritocompras.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  carrito: CarritoCompras;

  constructor(private carritoService: CarritoComprasService, private http: HttpClient) {
    this.carrito = new CarritoCompras();
  }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  // Método para mostrar un carrito de compras por su ID
  mostrarCarritoCompras(carritoID: number): void {
    this.carritoService.mostrarCarritoCompras(carritoID).subscribe((data: any) => {
      // Manejo de la respuesta del servicio
      console.log(data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el carrito de compras:', error);
    });
  }

  // Método para crear un nuevo carrito de compras
  crearCarritoCompras(): void {
    this.carritoService.crearCarritoCompras(this.carrito).subscribe((data: any) => {
      // Manejo de la respuesta del servicio
      console.log('Carrito de compras creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el carrito de compras:', error);
    });
  }

  // Método para eliminar un carrito de compras por su ID
  eliminarCarritoCompras(carritoID: number): void {
    this.carritoService.eliminarCarritoCompras(carritoID).subscribe((data: any) => {
      // Manejo de la respuesta del servicio
      console.log('Carrito de compras eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el carrito de compras:', error);
    });
  }

  // Método para actualizar un carrito de compras por su ID
  actualizarCarritoCompras(carritoID: number): void {
    this.carritoService.actualizarCarritoCompras(carritoID, this.carrito).subscribe((data: any) => {
      // Manejo de la respuesta del servicio
      console.log('Carrito de compras actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el carrito de compras:', error);
    });
  }
}
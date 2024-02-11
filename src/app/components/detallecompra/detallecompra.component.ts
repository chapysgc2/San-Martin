import { Component, OnInit } from '@angular/core';
import { DetalleCompra } from 'src/app/models/detallecompra.models';
import { DetalleCompraService } from 'src/app/services/detallecompra.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios
@Component({
  selector: 'app-detallecompra',
  templateUrl: './detallecompra.component.html',
  styleUrls: ['./detallecompra.component.css']
})
export class DetalleCompraComponent implements OnInit {

  constructor(private detalleCompraService: DetalleCompraService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarDetalleCompra(detallecompraID: number): void {
    this.detalleCompraService.mostrarDetalleCompra(detallecompraID).subscribe((data: any) => {
      console.log('Detalle de compra mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el detalle de compra:', error);
    });
  }

  crearDetalleCompra(detallecompraNuevo: DetalleCompra): void {
    this.detalleCompraService.crearDetalleCompra(detallecompraNuevo).subscribe((data: any) => {
      console.log('Detalle de compra creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el detalle de compra:', error);
    });
  }

  eliminarDetalleCompra(detallecompraID: number): void {
    this.detalleCompraService.elminarDetalleCompra(detallecompraID).subscribe((data: any) => {
      console.log('Detalle de compra eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el detalle de compra:', error);
    });
  }

  actualizarProducto(detallecompraID: number, detallecompraNuevo: DetalleCompra): void {
    this.detalleCompraService.actualizarProducto(detallecompraID, detallecompraNuevo).subscribe((data: any) => {
      console.log('Detalle de compra actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el detalle de compra:', error);
    });
  }

}

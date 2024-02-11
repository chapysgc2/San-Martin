import { Component, OnInit } from '@angular/core';
import { SeguimientoPedidos } from 'src/app/models/seguimientopedidos.models';
import { SeguimientoPedidosService } from 'src/app/services/seguimientopedidos.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-seguimientopedidos',
  templateUrl: './seguimientopedidos.component.html',
  styleUrls: ['./seguimientopedidos.component.css']
})
export class SeguimientoPedidosComponent implements OnInit {

  constructor(private seguimientoPedidosService: SeguimientoPedidosService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarSeguimientoPedidos(seguimientoID: number): void {
    this.seguimientoPedidosService.mostrarSeguimientoPedidos(seguimientoID).subscribe((data: any) => {
      console.log('Seguimiento de pedidos mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el seguimiento de pedidos:', error);
    });
  }

  listarSeguimientoPedidosUsuario(usuarioID: number): void {
    this.seguimientoPedidosService.listarSeguimientoPedidosUsuario(usuarioID).subscribe((data: any) => {
      console.log('Seguimiento de pedidos del usuario mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al listar el seguimiento de pedidos del usuario:', error);
    });
  }

  crearSeguimientoPedidos(seguimientoNuevo: SeguimientoPedidos): void {
    this.seguimientoPedidosService.crearSeguimientoPedidos(seguimientoNuevo).subscribe((data: any) => {
      console.log('Seguimiento de pedidos creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el seguimiento de pedidos:', error);
    });
  }

  eliminarSeguimientoPedidos(seguimientoID: number): void {
    this.seguimientoPedidosService.eliminarSeguimientoPedidos(seguimientoID).subscribe((data: any) => {
      console.log('Seguimiento de pedidos eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el seguimiento de pedidos:', error);
    });
  }

  actualizarSeguimientoPedidos(seguimientoID: number, seguimientoNuevo: SeguimientoPedidos): void {
    this.seguimientoPedidosService.actualizarSeguimientoPedidos(seguimientoID, seguimientoNuevo).subscribe((data: any) => {
      console.log('Seguimiento de pedidos actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el seguimiento de pedidos:', error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HistorialCompras } from 'src/app/models/historialcompras.models';
import { HistorialComprasService } from 'src/app/services/historialcompras.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-historialcompras',
  templateUrl: './historialcompras.component.html',
  styleUrls: ['./historialcompras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  constructor(private historialComprasService: HistorialComprasService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarHistorialCompras(historialID: number): void {
    this.historialComprasService.mostrarHistorialCompras(historialID).subscribe((data: any) => {
      console.log('Historial de compras mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el historial de compras:', error);
    });
  }

  listarHistorialComprasUsuario(usuarioID: number): void {
    this.historialComprasService.listarHistorialComprasUsuario(usuarioID).subscribe((data: any) => {
      console.log('Historial de compras del usuario mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al listar el historial de compras del usuario:', error);
    });
  }

  crearHistorialCompras(historialcomprasNuevo: HistorialCompras): void {
    this.historialComprasService.crearHistorialCompras(historialcomprasNuevo).subscribe((data: any) => {
      console.log('Historial de compras creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el historial de compras:', error);
    });
  }

  eliminarHistorialCompras(historialID: number): void {
    this.historialComprasService.eliminarHistorialCompras(historialID).subscribe((data: any) => {
      console.log('Historial de compras eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el historial de compras:', error);
    });
  }

}

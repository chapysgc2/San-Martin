import { Component, OnInit } from '@angular/core';
import { ReportesVentas } from 'src/app/models/reportesventas.models';
import { ReportesVentasService } from 'src/app/services/reportesventas.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-reportesventas',
  templateUrl: './reportesventas.component.html',
  styleUrls: ['./reportesventas.component.css']
})
export class ReportesVentasComponent implements OnInit {

  constructor(private reportesVentasService: ReportesVentasService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarReportesVentas(reporteID: number): void {
    this.reportesVentasService.mostrarReportesVentas(reporteID).subscribe((data: any) => {
      console.log('Seguimiento de pedidos mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el seguimiento de pedidos:', error);
    });
  }

  listarReportesVentasFecha(fecha: number): void {
    this.reportesVentasService.listarReportesVentasFecha(fecha).subscribe((data: any) => {
      console.log('Reportes de ventas por fecha mostrados:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al listar los reportes de ventas por fecha:', error);
    });
  }

  crearReportesVentas(reportesVentasNuevo: ReportesVentas): void {
    this.reportesVentasService.crearReportesVentas(reportesVentasNuevo).subscribe((data: any) => {
      console.log('Reporte de ventas creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el reporte de ventas:', error);
    });
  }

  eliminarReportesVentas(reporteID: number): void {
    this.reportesVentasService.eliminarReportesVentas(reporteID).subscribe((data: any) => {
      console.log('Reporte de ventas eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el reporte de ventas:', error);
    });
  }

  actualizarReportesVentas(reporteID: number, reportesVentasNuevo: ReportesVentas): void {
    this.reportesVentasService.actualizarReportesVentas(reporteID, reportesVentasNuevo).subscribe((data: any) => {
      console.log('Reporte de ventas actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el reporte de ventas:', error);
    });
  }

}

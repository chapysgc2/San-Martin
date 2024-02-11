import { Injectable } from '@angular/core';
import { ReportesVentas } from "../models/reportesventas.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class ReportesVentasService {

  constructor(private http: HttpClient) { }
  mostrarReportesVentas(reporteID:number) {
    return this.http.get(`${environment.API_URI}/api/ReportesVentas/mostrarReportesVentas/${reporteID}`,{headers:headers});
  }
  listarReportesVentasFecha(fecha:number) {
    return this.http.get(`${environment.API_URI}/api/ReportesVentas/listarReportesVentasFecha/${fecha}`,{headers:headers});
  }
  crearReportesVentas(reportesVentasNuevo:ReportesVentas){
    return this.http.post(`${environment.API_URI}/api/ReportesVentas/crearReportesVentas`,{"fecha": reportesVentasNuevo.fecha,"totalVentas": reportesVentasNuevo.totalVentas},{headers:headers});
  }
  eliminarReportesVentas(reporteID:number){
    return this.http.delete(`${environment.API_URI}/api/ReportesVentas/eliminarReportesVentas/${reporteID}`,{headers:headers});
  }
  actualizarReportesVentas(reporteID:number,reportesVentasNuevo:ReportesVentas){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/ReportesVentas/actualizarReportesVentas/${reporteID }`,{"fecha": reportesVentasNuevo.fecha,"totalVentas": reportesVentasNuevo.totalVentas},{headers:headers});
}

}
import { Injectable } from '@angular/core';
import { HistorialCompras } from "../models/historialcompras.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class HistorialComprasService {

  constructor(private http: HttpClient) { }
  mostrarHistorialCompras(historialID:number) {
    return this.http.get(`${environment.API_URI}/api/HistorialCompras/mostrarHistorialCompras/${historialID}`,{headers:headers});
  }
  listarHistorialComprasUsuario(usuarioID:number) {
    return this.http.get(`${environment.API_URI}/api/HistorialCompras/listarHistorialComprasUsuario/${usuarioID}`,{headers:headers});
  }
  crearHistorialCompras(historialcomprasNuevo:HistorialCompras){
    return this.http.post(`${environment.API_URI}/api/HistorialCompras/crearHistorialCompras`,{"usuarioID": historialcomprasNuevo.usuarioID, "compraID": historialcomprasNuevo.compraID },{headers:headers});
  }
  eliminarHistorialCompras(historialID:number){
    return this.http.delete(`${environment.API_URI}/api/HistorialCompras/eliminarHistorialCompras/${historialID}`,{headers:headers});

  }

}
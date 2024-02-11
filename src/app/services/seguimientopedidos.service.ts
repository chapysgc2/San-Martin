import { Injectable } from '@angular/core';
import { SeguimientoPedidos } from "../models/seguimientopedidos.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoPedidosService {

  constructor(private http: HttpClient) { }
  mostrarSeguimientoPedidos(seguimientoID:number) {
    return this.http.get(`${environment.API_URI}/api/SeguimientoPedidos/mostrarSeguimientoPedidos/${seguimientoID}`,{headers:headers});
  }
  listarSeguimientoPedidosUsuario(usuarioID:number) {
    return this.http.get(`${environment.API_URI}/api/SeguimientoPedidos/listarSeguimientoPedidosUsuario/${usuarioID}`,{headers:headers});
  }
  crearSeguimientoPedidos(seguimientoNuevo:SeguimientoPedidos){
    return this.http.post(`${environment.API_URI}/api/SeguimientoPedidos/crearSeguimientoPedidos`,{"usuarioID": seguimientoNuevo.usuarioID,"compraID": seguimientoNuevo.compraID,"estado": seguimientoNuevo.estado},{headers:headers});
  }
  eliminarSeguimientoPedidos(seguimientoID:number){
    return this.http.delete(`${environment.API_URI}/api/SeguimientoPedidos/eliminarSeguimientoPedidos/${seguimientoID}`,{headers:headers});
  }
  actualizarSeguimientoPedidos(seguimientoID:number,seguimientoNuevo:SeguimientoPedidos){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/SeguimientoPedidos/actualizarSeguimientoPedidos/${seguimientoID}`,{"usuarioID": seguimientoNuevo.usuarioID,"compraID": seguimientoNuevo.compraID,"estado": seguimientoNuevo.estado},{headers:headers});
}

}
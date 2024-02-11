import { Injectable } from '@angular/core';
import { DetalleCarrito } from "../models/detallecarrito.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class DetalleCarritoService {

  constructor(private http: HttpClient) { }
  mostrarDetalleCarrito(detallecarritoID:number) {
    return this.http.get(`${environment.API_URI}/api/DetalleCarrito/mostrarDetalleCarrito/${detallecarritoID}`,{headers:headers});
  }
  crearDetalleCompra(detallecarritoNuevo:DetalleCarrito){
    return this.http.post(`${environment.API_URI}/api/DetalleCarrito/crearDetalleCarrito`,{"carritoID": detallecarritoNuevo.carritoID,"productoID": detallecarritoNuevo.productoID, "cantidad": detallecarritoNuevo.cantidad},{headers:headers});
  }
  eliminarDetalleCarrito(detallecarritoID:number){
    return this.http.delete(`${environment.API_URI}/api/DetalleCarrito/eliminarDetalleCarrito/${detallecarritoID}`,{headers:headers});
  }
  actualizarDetalleCarrito(detallecarritoID:number,detallecarritoNuevo:DetalleCarrito){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/DetalleCarrito/actualizarDetalleCarrito/${detallecarritoID}`,{"carritoID": detallecarritoNuevo.carritoID,"productoID": detallecarritoNuevo.productoID, "cantidad": detallecarritoNuevo.cantidad},{headers:headers});
}

}
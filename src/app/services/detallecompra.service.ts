import { Injectable } from '@angular/core';
import { DetalleCompra } from "../models/detallecompra.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {

  constructor(private http: HttpClient) { }
  mostrarDetalleCompra(detallecompraID:number) {
    return this.http.get(`${environment.API_URI}/api/DetalleCompra/mostrarDetalleCompra/${detallecompraID}`,{headers:headers});
  }
  crearDetalleCompra(detallecompraNuevo:DetalleCompra){
    return this.http.post(`${environment.API_URI}/api/DetalleCompra/crearDetalleCompra`,{"compraID": detallecompraNuevo.compraID,"productoID": detallecompraNuevo.productoID, "cantidad": detallecompraNuevo.cantidad, "subtotal": detallecompraNuevo.subtotal},{headers:headers});
  }
  elminarDetalleCompra(detallecompraID:number){
    return this.http.delete(`${environment.API_URI}/api/DetalleCompra/elminarDetalleCompra/${detallecompraID}`,{headers:headers});
  }
  actualizarProducto(detallecompraID:number,detallecompraNuevo:DetalleCompra){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/DetalleCompra/elminarDetalleCompra/${detallecompraID}`,{"compraID": detallecompraNuevo.compraID,"productoID": detallecompraNuevo.productoID, "cantidad": detallecompraNuevo.cantidad, "subtotal": detallecompraNuevo.subtotal},{headers:headers});
}

}
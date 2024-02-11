import { Injectable } from '@angular/core';
import { CarritoCompras } from "../models/carritocompras.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  constructor(private http: HttpClient) { }
  mostrarCarritoCompras(carritoID:number) {
    return this.http.get(`${environment.API_URI}/api/CarritoCompras/mostrarCarritoCompras/${carritoID}`,{headers:headers});
  }
  crearCarritoCompras(carritocomprasNuevo:CarritoCompras){
    return this.http.post(`${environment.API_URI}/api/CarritoCompras/crearCarritoCompras`,{"usuarioID": carritocomprasNuevo.usuarioID,"estado": carritocomprasNuevo.estado},{headers:headers});
  }
  eliminarCarritoCompras(carritoID:number){
    return this.http.delete(`${environment.API_URI}/api/CarritoCompras/eliminarCarritoCompras/${carritoID}`,{headers:headers});
  }
  actualizarCarritoCompras(carritoID:number,carritocomprasNuevo:CarritoCompras){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/CarritoCompras/actualizarCarritoCompras/${carritoID}`,{"usuarioID": carritocomprasNuevo.usuarioID,"estado": carritocomprasNuevo.estado},{headers:headers});
}

}
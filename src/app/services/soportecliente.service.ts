import { Injectable } from '@angular/core';
import { SoporteCliente } from "../models/soportecliente.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class SoporteClienteService {

  constructor(private http: HttpClient) { }
  mostrarConsulta(consultaID:number) {
    return this.http.get(`${environment.API_URI}/api/SoporteCliente/mostrarConsulta/${ consultaID}`,{headers:headers});
  }
  listarSoporteClientesUsuario(usuarioID:number) {
    return this.http.get(`${environment.API_URI}/api/SoporteCliente/listarSoporteClientesUsuario/${usuarioID}`,{headers:headers});
  }
  crearSoporteCliente(soporteNuevo:SoporteCliente){
    return this.http.post(`${environment.API_URI}/api/SoporteCliente/crearSoporteCliente`,{"usuarioID": soporteNuevo.usuarioID,"fecha": soporteNuevo.fecha,"consulta": soporteNuevo.consulta},{headers:headers});
  }
  eliminarUsuario(consultaID:number){
    return this.http.delete(`${environment.API_URI}/api/SoporteCliente/eliminarSoporteCliente/${consultaID}`,{headers:headers});
  }
  actualizarSoporteCliente(consultaID:number,soporteclienteNuevo:SoporteCliente){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/SoporteCliente/actualizarSoporteCliente/${consultaID}`,{"usuarioID": soporteclienteNuevo.usuarioID,"fecha": soporteclienteNuevo.fecha,"consulta":soporteclienteNuevo.consulta},{headers:headers});
  }
}

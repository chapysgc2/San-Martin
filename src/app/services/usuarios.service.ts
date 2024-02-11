import { Injectable } from '@angular/core';
import { Usuarios } from "../models/usuario.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  mostrarTodosUsuarios() {
    return this.http.get(`${environment.API_URI}/api/Usuarios/mostrarTodosUsuarios`,{headers:headers});
  }
  mostrarUsuario(usuarioID:number) {
    return this.http.get(`${environment.API_URI}/api/Usuarios/mostrarUsuario/${usuarioID}`,{headers:headers});
  }
  crearUsuario(usuarioNuevo:Usuarios){
    return this.http.post(`${environment.API_URI}/api/usuarios/crearUsuario`,{"nombre": usuarioNuevo.nombre,"correo": usuarioNuevo.correo,"telefono": usuarioNuevo.telefono,"contraseniaUsuario": usuarioNuevo.contraseniaUsuario, "rolID": usuarioNuevo.rolID},{headers:headers});
  }
  eliminarUsuario(usuarioID:number){
    return this.http.delete(`${environment.API_URI}/api/usuarios/eliminarUsuario/${usuarioID}`);
  }
  actualizarUsuario(usuarioID:number,usuarioNuevo:Usuarios){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/Usuarios/actualizarUsuario/${usuarioID}`,{"nombre": usuarioNuevo.nombre,"correo": usuarioNuevo.correo,"telefono": usuarioNuevo.telefono,"contraseniaUsuario": usuarioNuevo.contraseniaUsuario, "rolID": usuarioNuevo.rolID},{headers:headers});
  }
}

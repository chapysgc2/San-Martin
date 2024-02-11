import { Injectable } from '@angular/core';
import { Producto } from "../models/productos.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  mostrarProductos() {
    return this.http.get(`${environment.API_URI}/api/Productos/mostrarProductos`,{headers:headers});
  }
  mostrarProducto(fecha:number) {
    return this.http.get(`${environment.API_URI}/api/Productos/mostrarProducto/${fecha}`,{headers:headers});
  }
  crearProducto(productoNuevo:Producto){
    return this.http.post(`${environment.API_URI}/api/Productos/crearProducto`,{"nombre": productoNuevo.nombre,"descripcion": productoNuevo.descripcion, "precio": productoNuevo.precio, "color": productoNuevo.color, "especificaciones": productoNuevo.especificaciones, "stock": productoNuevo.stock },{headers:headers});
  }
  eliminarProducto(productoID:number){
    return this.http.delete(`${environment.API_URI}/api/Productos/eliminarProducto/${productoID}`,{headers:headers});
  }
  actualizarProducto(productoID:number,productoNuevo:Producto){
    //console.log(idU,usuarioNuevo)
    return this.http.put(`${environment.API_URI}/api/Productos/actualizarProducto/${productoID }`,{"nombre": productoNuevo.nombre,"descripcion": productoNuevo.descripcion, "precio": productoNuevo.precio, "color": productoNuevo.color, "especificaciones": productoNuevo.especificaciones, "stock": productoNuevo.stock },{headers:headers});
}

}
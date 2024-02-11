import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarritoCompras } from "../models/carritocompras.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
    providedIn: 'root'
})
export class CarritoComprasService {
    private productos: any[] = [];
    productosSignals = new BehaviorSubject<any[]>([]);
    private carritoKey = 'carrito';
    
    constructor(private http: HttpClient) { 
        const storedCarrito = localStorage.getItem(this.carritoKey);
        if (storedCarrito){
            this.productos = JSON.parse(storedCarrito);
            this.productosSignals.next(this.productos);
        }
    }

    agregarProducto(producto: any){
        this.productos.push(producto);
        this.actualizarLocalStorage();
    }

    eliminarProducto(index: number) {
        this.productos.splice(index, 1);
        this.actualizarLocalStorage();
    }

    private actualizarLocalStorage() {
        // Guarda los productos del carrito en el localStorage
        localStorage.setItem(this.carritoKey, JSON.stringify(this.productos));
        // Emite el nuevo arreglo de productos a los suscriptores
        this.productosSignals.next(this.productos);
    }

    mostrarCarritoCompras(carritoID: number) {
        return this.http.get(`${environment.API_URI}/api/CarritoCompras/mostrarCarritoCompras/${carritoID}`, { headers: headers });
    }
    crearCarritoCompras(carritocomprasNuevo: CarritoCompras) {
        return this.http.post(`${environment.API_URI}/api/CarritoCompras/crearCarritoCompras`, { "usuarioID": carritocomprasNuevo.usuarioID, "estado": carritocomprasNuevo.estado }, { headers: headers });
    }
    eliminarCarritoCompras(carritoID: number) {
        return this.http.delete(`${environment.API_URI}/api/CarritoCompras/eliminarCarritoCompras/${carritoID}`, { headers: headers });
    }
    actualizarCarritoCompras(carritoID: number, carritocomprasNuevo: CarritoCompras) {
        //console.log(idU,usuarioNuevo)
        return this.http.put(`${environment.API_URI}/api/CarritoCompras/actualizarCarritoCompras/${carritoID}`, { "usuarioID": carritocomprasNuevo.usuarioID, "estado": carritocomprasNuevo.estado }, { headers: headers });
    }

}
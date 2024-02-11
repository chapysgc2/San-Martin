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
    
    constructor(private http: HttpClient) { }

    agregarProducto(producto: any){
        this.productos.push(producto);
        this.productosSignals.next(this.productos);
    }
    eliminarProducto(index: number) {
        this.productos.splice(index, 1);
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
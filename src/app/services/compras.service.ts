import { Injectable } from '@angular/core';
import { Compras } from "../models/compras.models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

    constructor(private http: HttpClient) { }
    mostrarCompra(compraID:number) {
        return this.http.get(`${environment.API_URI}/api/Compras/mostrarCompra/${compraID}`,{headers:headers});
    }
    crearCompra(comprasNuevo:Compras){
        return this.http.post(`${environment.API_URI}/api/Compras/crearCompra`,{"usuarioID": comprasNuevo.usuarioID,"fecha": comprasNuevo.fecha, "total": comprasNuevo.total},{headers:headers});
    }
    eliminarCompra(comprasID:number){
        //console.log(idU,usuarioNuevo)
        return this.http.delete(`${environment.API_URI}/api/Compras/eliminarCompra/${comprasID}`,{headers:headers});
    }
    mostrarComprasFecha(fecha:string) {
        return this.http.get(`${environment.API_URI}/api/Compras/mostrarComprasFecha/${fecha}`,{headers:headers});
    }
    mostrarComprasUserID(usuarioID:number) {
        return this.http.get(`${environment.API_URI}/api/Compras/mostrarComprasUserID/${usuarioID}`,{headers:headers});
    }

}
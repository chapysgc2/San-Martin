import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/models/compras.models';
import { ComprasService } from 'src/app/services/compras.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  constructor(private comprasService: ComprasService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarCompra(compraID: number): void {
    this.comprasService.mostrarCompra(compraID).subscribe((data: any) => {
      console.log('Compra mostrada:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar la compra:', error);
    });
  }

  crearCompra(compraNueva: Compras): void {
    this.comprasService.crearCompra(compraNueva).subscribe((data: any) => {
      console.log('Compra creada:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear la compra:', error);
    });
  }

  eliminarCompra(compraID: number): void {
    this.comprasService.eliminarCompra(compraID).subscribe((data: any) => {
      console.log('Compra eliminada:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar la compra:', error);
    });
  }

  mostrarComprasFecha(fecha: string): void {
    this.comprasService.mostrarComprasFecha(fecha).subscribe((data: any) => {
      console.log('Compras mostradas por fecha:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar las compras por fecha:', error);
    });
  }

  mostrarComprasUserID(usuarioID: number): void {
    this.comprasService.mostrarComprasUserID(usuarioID).subscribe((data: any) => {
      console.log('Compras mostradas por usuario ID:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar las compras por usuario ID:', error);
    });
  }
}

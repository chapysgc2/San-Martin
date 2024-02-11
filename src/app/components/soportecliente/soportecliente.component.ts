import { Component, OnInit } from '@angular/core';
import { SoporteCliente } from 'src/app/models/soportecliente.models';
import { SoporteClienteService } from 'src/app/services/soportecliente.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-soportecliente',
  templateUrl: './soportecliente.component.html',
  styleUrls: ['./soportecliente.component.css']
})
export class SoporteClienteComponent implements OnInit {

  constructor(private soporteClienteService: SoporteClienteService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarConsulta(consultaID: number): void {
    this.soporteClienteService.mostrarConsulta(consultaID).subscribe((data: any) => {
      console.log('Consulta mostrada:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar la consulta:', error);
    });
  }

  listarSoporteClientesUsuario(usuarioID: number): void {
    this.soporteClienteService.listarSoporteClientesUsuario(usuarioID).subscribe((data: any) => {
      console.log('Soporte del cliente mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al listar el soporte del cliente:', error);
    });
  }

  crearSoporteCliente(soporteNuevo: SoporteCliente): void {
    this.soporteClienteService.crearSoporteCliente(soporteNuevo).subscribe((data: any) => {
      console.log('Soporte del cliente creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el soporte del cliente:', error);
    });
  }

  eliminarUsuario(consultaID: number): void {
    this.soporteClienteService.eliminarUsuario(consultaID).subscribe((data: any) => {
      console.log('Soporte del cliente eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el soporte del cliente:', error);
    });
  }

  actualizarSoporteCliente(consultaID: number, soporteclienteNuevo: SoporteCliente): void {
    this.soporteClienteService.actualizarSoporteCliente(consultaID, soporteclienteNuevo).subscribe((data: any) => {
      console.log('Soporte del cliente actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el soporte del cliente:', error);
    });
  }

}

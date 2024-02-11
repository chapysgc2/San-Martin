import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.models';
import { UsuariosService } from 'src/app/services/usuarios.service'; // Asegúrate de importar el servicio
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importa los módulos necesarios

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private http: HttpClient) { }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  mostrarTodosUsuarios(): void {
    this.usuariosService.mostrarTodosUsuarios().subscribe((data: any) => {
      console.log('Todos los usuarios mostrados:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar todos los usuarios:', error);
    });
  }

  mostrarUsuario(usuarioID: number): void {
    this.usuariosService.mostrarUsuario(usuarioID).subscribe((data: any) => {
      console.log('Usuario mostrado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al mostrar el usuario:', error);
    });
  }

  crearUsuario(usuarioNuevo: Usuarios): void {
    this.usuariosService.crearUsuario(usuarioNuevo).subscribe((data: any) => {
      console.log('Usuario creado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al crear el usuario:', error);
    });
  }

  eliminarUsuario(usuarioID: number): void {
    this.usuariosService.eliminarUsuario(usuarioID).subscribe((data: any) => {
      console.log('Usuario eliminado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al eliminar el usuario:', error);
    });
  }

  actualizarUsuario(usuarioID: number, usuarioNuevo: Usuarios): void {
    this.usuariosService.actualizarUsuario(usuarioID, usuarioNuevo).subscribe((data: any) => {
      console.log('Usuario actualizado:', data); // Puedes hacer algo con los datos recibidos
    }, (error) => {
      console.error('Error al actualizar el usuario:', error);
    });
  }

}

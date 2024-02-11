import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/services/logueo.service';
import { CarritoComprasService } from 'src/app/services/carritocompras.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private logueoService: LogueoService,private router:Router, private carritoService : CarritoComprasService) { }


  inicioseccion: number = 1;  // Declarar como propiedad de la clase
  name: string = '';
  bandera = false;
 
  cantidadProductos = 0;
  ngOnInit(): void {
    // Leer el objeto almacenado en localStorage
    const storedInicioSeccion = localStorage.getItem('info');
 // Leer el objeto almacenado en localStorage
 const storedInicioSeccionname = localStorage.getItem('name');

 // Verificar si hay un valor almacenado en localStorage
 if (storedInicioSeccionname !== null) {
  this.name = JSON.parse(storedInicioSeccionname).name;
  this.carritoService.productosSignals.subscribe(productos => {
    this.cantidadProductos = productos.length;
  });
 

}
    // Verificar si hay un valor almacenado en localStorage
    if (storedInicioSeccion !== null) {
      this.inicioseccion = JSON.parse(storedInicioSeccion).inicioseccion;
    }
  }
  salir(){
    const miObjeto = { footer: 1, inicioseccion: 0 };
    localStorage.setItem('info', JSON.stringify(miObjeto));

  }
  inicio1(){
    const miObjeto = { footer: 0, inicioseccion: 3 };
    localStorage.setItem('info', JSON.stringify(miObjeto));

  }
}
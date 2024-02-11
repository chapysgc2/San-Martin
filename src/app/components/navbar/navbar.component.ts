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
  bandera = false;
  inicioseccion=1
  cantidadProductos = 0;
  ngOnInit(): void {
    if (localStorage.getItem("id_Rol")=='0') {
      this.bandera=true;
    }else{
      this.bandera=false;
    }
    //console.log(localStorage.getItem("id_Rol"))
    this.logueoService.disparadorDeLogueo.subscribe(data =>{
      //console.log(data.data)
      this.bandera=data.data
    })

    this.carritoService.productosSignals.subscribe(productos => {
      this.cantidadProductos = productos.length;
    });
  }
  logout(){
    //console.log("Cerrando sesion");
    localStorage.removeItem("id_Rol")
    localStorage.removeItem("usuario")
    this.router.navigateByUrl('');
    this.bandera=false
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/services/logueo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logueoService: LogueoService,private router:Router) { }
  bandera = false;
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
  }
  logout(){
    //console.log("Cerrando sesion");
    localStorage.removeItem("id_Rol")
    localStorage.removeItem("usuario")
    this.router.navigateByUrl('');
    this.bandera=false
  }
}

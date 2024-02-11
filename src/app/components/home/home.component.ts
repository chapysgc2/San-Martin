import { Component, OnInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    catalogoProductos = [
    { 
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      precio: 10.99,
      imagen: 'https://divisionprofesional.comex.com.mx/getattachment/52eea00c-83a2-49e1-864b-2440a1a50dd6/.aspx/'
    },
    { 
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      precio: 19.99,
      imagen: 'https://divisionprofesional.comex.com.mx/getattachment/52eea00c-83a2-49e1-864b-2440a1a50dd6/.aspx/'
    },
  ];
  constructor() { }

  ngOnInit(): void {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }

    agregarAlCarrito(producto: any) {
  }
}


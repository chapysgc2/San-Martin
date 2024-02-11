import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catalogoProductos:any[] = [];

  constructor(private productosService: ProductosService) { }



  ngOnInit(): void {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});

    this.productosService.mostrarProductos().subscribe(
        (data:any) => {
            this.catalogoProductos = data;
        }
    )
  }

    agregarAlCarrito(producto: any) {
  }
}


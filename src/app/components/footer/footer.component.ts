import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  footer: number = 1;  // Declarar como propiedad de la clase

  constructor() { }

  ngOnInit(): void {
    // Leer el objeto almacenado en localStorage
    const storedFooter = localStorage.getItem('info');

    // Verificar si hay un valor almacenado en localStorage
    if (storedFooter !== null) {
      // Convertir la cadena a un número y asignar a la propiedad footer
      this.footer = parseInt(storedFooter, 10);
      this.footer = JSON.parse(storedFooter).footer;
    console.log(this.footer)
    }
  }
}



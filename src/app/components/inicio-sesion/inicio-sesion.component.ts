// inicio-sesion.component.ts
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class inicioseccion implements OnInit {
  constructor(private router: Router) {}
  name: string = '';
  email: string = '';
  password: string = '';
  ngOnInit(): void {
    // Guardar un objeto en localStorage con las claves correctas
    const miObjeto = { footer: 0, inicioseccion: 2 };
    localStorage.setItem('info', JSON.stringify(miObjeto));

    // Recuperar valores del localStorage
    const storedData = localStorage.getItem('info');

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      console.log('footer:', parsedData.footer);
      console.log('inicioseccion:', parsedData.inicioseccion);
    }
  }


  inicio1() {
    if (this.name && this.email && this.password) {
      const miObjeto = { footer: 1, inicioseccion: 1 };
      localStorage.setItem('info', JSON.stringify(miObjeto));
      const miObjeto2 = { name: this.name };
      localStorage.setItem('name', JSON.stringify(miObjeto2));
      window.location.href = '/';
    } else {
      // Manejar el caso donde alguno de los campos está vacío
      alert("Ingresa los datos correctos")
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComprasComponent } from './components/carritocompras/carritocompras.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DetalleCarritoComponent } from './components/detallecarrito/detallecarrito.component';
import { DetalleCompraComponent } from './components/detallecompra/detallecompra.component';
import { HistorialComprasComponent } from './components/historialcompras/historialcompras.component';
import { SeguimientoPedidosComponent } from './components/seguimientopedidos/seguimientopedidos.component';
import { ReportesVentasComponent } from './components/reportesventas/reportesventas.component';
import { SoporteClienteComponent } from './components/soportecliente/soportecliente.component';
import { HomeComponent } from './components/home/home.component';


const routs : Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  
  {
    path: 'contacto',
    component: AboutComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  
  {
    path: 'carritocompras',
    component: CarritoComprasComponent,
  },
  {
    path: 'compras',
    component: ComprasComponent,
  },
  {
    path: 'detallecarrito',
    component: DetalleCarritoComponent,
  },
  {
    path: 'detallecompra',
    component: DetalleCompraComponent,
  },
  {
    path: 'historialcompras',
    component: HistorialComprasComponent,
  },
  {
    path: 'reportesventas',
    component: ReportesVentasComponent,
  },
  {
    path: 'seguimientopedidos',
    component: SeguimientoPedidosComponent,
  },
  {
    path: 'soportecliente',
    component: SoporteClienteComponent,
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

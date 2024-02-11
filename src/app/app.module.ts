import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { AppRoutingModule } from './app-routing.module';
import { CarritoComprasComponent} from './components/carritocompras/carritocompras.component';
import { ComprasComponent} from './components/compras/compras.component';
import { DetalleCarritoComponent} from './components/detallecarrito/detallecarrito.component';
import { DetalleCompraComponent} from './components/detallecompra/detallecompra.component';
import { HistorialComprasComponent} from './components/historialcompras/historialcompras.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReportesVentasComponent} from './components/reportesventas/reportesventas.component';
import { SeguimientoPedidosComponent} from './components/seguimientopedidos/seguimientopedidos.component';
import { SoporteClienteComponent} from './components/soportecliente/soportecliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,

    CrearCuentaComponent,
   
    CarritoComprasComponent,
    ComprasComponent,
    DetalleCarritoComponent,
    DetalleCompraComponent,
    HistorialComprasComponent,
    ProductosComponent,
    ReportesVentasComponent,
    SeguimientoPedidosComponent,
    SoporteClienteComponent


  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

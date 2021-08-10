import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VentaProductosComponent } from './components/venta-productos/venta-productos.component';
import { VentaServiciosComponent } from './components/venta-servicios/venta-servicios.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import {SharedModule} from "../shared/shared.module";
import { AdminCientComponent } from './components/admin-cient/admin-cient.component';
import {GuiModule} from "../bootstrap/gui.module";


@NgModule({
  declarations: [
    VentaProductosComponent,
    VentaServiciosComponent,
    HomeComponent,
    CarritoComponent,
    AdminCientComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    SharedModule,
    GuiModule
  ]
})
export class VentaModule { }

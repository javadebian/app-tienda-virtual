import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {VentaProductosComponent} from "./components/venta-productos/venta-productos.component";
import {VentaServiciosComponent} from "./components/venta-servicios/venta-servicios.component";
import {CarritoComponent} from "./components/carrito/carrito.component";
import {AdminCientComponent} from "./components/admin-cient/admin-cient.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'productos',
        component: VentaProductosComponent
      },
      {
        path:'servicios',
        component: VentaServiciosComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      },
      {
        path: 'clients/:dni',
        component: AdminCientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }

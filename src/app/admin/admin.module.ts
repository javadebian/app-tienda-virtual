import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

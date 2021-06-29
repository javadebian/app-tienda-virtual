import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdminComponent} from "./components/home-admin/home-admin.component";
import {ListaProductosComponent} from "./components/lista-productos/lista-productos.component";
import {ListaUsuariosComponent} from "./components/lista-usuarios/lista-usuarios.component";

const routes: Routes = [{
  path: '',
  component: HomeAdminComponent,
  children:[
    {
      path: 'listProducts',
      component: ListaProductosComponent
    },
    {
      path: 'listUsers',
      component: ListaUsuariosComponent
    }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../core/services/usuario/usuario.service";
import {Usuario} from "../../../core/models/usuario.model";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  form: FormGroup;
  usuarios: Usuario[];
  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService
  ) {
    this.usuarios = [];
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }
  private listarUsuarios():void{
    this.service.listarUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  private buildForm(): FormGroup{
    return this.formBuilder.group({
      dni: ['',[Validators.required]],
      nombres: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      email: ['',[Validators.required]],
      nroCel: ['',[Validators.required]],
      fechaNac: ['',[Validators.required]],
      estado: ['',[Validators.required]],
      password: [null]
    });
  }
   public guardarUsuario(event: Event):void{
    event.preventDefault();
    if(this.form.valid){

    }else{

    }
   }
}

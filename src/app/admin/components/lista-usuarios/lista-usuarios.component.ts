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
  usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService
  ) {
    this.usuarios = [];
    this.usuario = this.usuarios[0];
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
      id:[null],
      dni: ['',[Validators.required]],
      nombres: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      nroCel: ['',[Validators.required]],
      fechaNac: ['',[Validators.required]],
      estado: ['',[Validators.required]],
      password: [null]
    });
  }
   public guardarUsuario(event: Event):void{
    event.preventDefault();
    if(this.form.valid){
      this.usuario = this.form.value;
      if(this.usuario.id != null){
        this.service.acualizarUsuario(this.usuario).subscribe(data => {
          this.listarUsuarios();
        });
      }else{
        this.usuario.id = 0;
        this.usuario.password = this.usuario.dni;
        this.service.nuevoUsuario(this.usuario).subscribe(data => {
          this.listarUsuarios();
        })
      }
    }else{

    }
   }

   public nuevoUsuario():void{
    this.form.reset();
   }
   public editarUsuario(usuario: Usuario): void{
    this.form.patchValue(usuario);
   }
}

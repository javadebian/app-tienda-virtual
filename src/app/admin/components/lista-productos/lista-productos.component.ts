import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Producto} from "../../../core/models/producto.model";
import {ProductoService} from "../../../core/services/producto/producto.service";
import {FileUploadService} from "../../../core/services/upload/file-upload.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  form: FormGroup;
  chosenFiles: FileList | any;
  existingFile: File | any;
  dni: string;
  imgFile: string;
  showImg : boolean;
  productos: Producto[];
  producto: Producto;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductoService,
    private fileUploadService: FileUploadService
  ) {
    this.showImg = false;
    this.imgFile = '/assets/img/upload.jpeg';
    this.dni ='40786869';
    this.productos = [];
    this.producto = this.productos[0];
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.listarProductosUsuario(this.dni);
  }
  private listarProductosUsuario(dni: string):void{
    this.service.listarProductosUsuario(dni).subscribe(data => {
      this.productos = data;
    });
  }

  private buildForm(): FormGroup{
    return this.formBuilder.group({
      id:[null],
      nombre: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      precio: [0,[Validators.required]],
      tipo: ['',[Validators.required]],
      stock: [0,[Validators.required]],
      img: ['',[Validators.required]],
      dni: [null]
    });
  }

  public guardarProducto(event: Event):void{
    event.preventDefault();
    if(this.form.valid){
      this.producto = this.form.value;
      if(this.producto.id != null){
        this.service.acualizarProducto(this.producto).subscribe(data => {
          this.listarProductosUsuario(this.dni);
        });
      }else{
        this.producto.id = 0;
        this.producto.dni = this.dni;
        this.service.nuevoProducto(this.producto).subscribe(data => {
          this.listarProductosUsuario(this.dni);
        })
      }
    }else{
      console.log(this.form.errors);
    }
  }

  public nuevoProducto():void{
    this.form.reset();
    this.showImg = false;
  }
  public editarProducto(producto1: Producto): void{
    this.form.patchValue(producto1);
    if(producto1.img !=''){
      this.imgFile = `${environment.url_api}/upload/` + producto1.img;
    }else{
      this.imgFile = '/assets/img/upload.jpeg';
    }
    this.showImg = true;
  }

  onFileChange(event: any): void {
    this.chosenFiles = event.target.files;
    this.existingFile = this.chosenFiles.item(0);

    this.fileUploadService.fileUpload(this.existingFile).subscribe(data => {
      this.imgFile = `${environment.url_api}/upload/` + data.nombreArchivo;
      this.form.get('img')?.setValue(data.nombreArchivo);
    });
  }
}

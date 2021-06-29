import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../core/services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../../core/models/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  dataLogin: Login;
  msj: string;
  constructor(
    private formBuilder : FormBuilder,
    private loginService : LoginService,
    private router: Router
  ) {
    this.msj = '';
    this.dataLogin = {dni:'', clave:''};
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): FormGroup{
    return this.formBuilder.group({
      dni: ['',[Validators.required]],
      clave: ['',[Validators.required]]
    });
  }

  public login(event: Event): void{
    event.preventDefault();
    if(this.form.value != null){
      this.dataLogin = this.form.value;
      this.loginService.loginAdmin(this.dataLogin).subscribe(data =>{
        if(data.valido){
          this.router.navigate(['/admin']);
        }else {
          this.msj = data.msj;
        }
      });
    }else {

    }
  }
}

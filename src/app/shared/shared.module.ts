import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from "@angular/router";
import {GuiModule} from "../bootstrap/gui.module";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GuiModule
  ],
    imports: [
        CommonModule,
        RouterModule,
        GuiModule
    ]
})
export class SharedModule { }

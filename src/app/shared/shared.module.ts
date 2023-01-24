import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importamos modulos de material api
//para no recargar al app.component y que los imports carguen solo cuando se les neccesite
//algunos tags requieren de otros por lo que puede parecer que no funcionan
//si no funciona, ng serve de nuevo
import {MatButtonModule,} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    //por material importamos ambos forms en el modulo contenedr de los componentes
    ReactiveFormsModule,
    FormsModule,

    //material angular
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  exports:[
    FormComponent
  ]
})
export class SharedModule { }

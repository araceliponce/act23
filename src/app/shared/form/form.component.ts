import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  hide=true;

  //reactive form
  // constructor(private formBuilder: FormBuilder) { }
  
  // registroForm = this.formBuilder.group({
  //     valorA:[0, Validators.required],
  //     valorB:[0, Validators.required],
  //     sumar:[false],
  //     restar:[false],
  //     multiplicar:[false],
  //     dividir:[false],
      
  // })

  valorA=0;
  valorB=0;
  sumar=false;
  restar=false;
  multiplicar=false;
  dividir=false

  
  // get valorA(){return this.registroForm.get('valorA')}
  // get valorB(){return this.registroForm.get('valorB')}
  // get sumar(){return this.registroForm.get('sumar')}
  // get restar(){return this.registroForm.get('restar')}
  // get multiplicar(){return this.registroForm.get('multiplicar')}
  // get dividir(){return this.registroForm.get('dividir')}
    
  respuesta = "";
  // respuestas:string = "";
  datos = new Array();
  Enviar(){ 
    // this.respuestas = {};
    this.respuesta = ""
    // console.log('status:',this.registroForm.controls.sumar.statusChanges)
    // console.log(this.registroForm.controls.sumar)
      if(this.sumar){
        // let valor1 = +this.registroForm.controls.valorA!.value || 0;
        // let valor2 = +this.registroForm.controls.valorB!.value || 0;
        let suma = this.valorA + this.valorB;
        // this.respuestas = "\n " + suma;
        this.respuesta += "\n La suma es " + suma;
       
      }
      if(this.restar){
        // let valor1 = +this.registroForm.controls.valorA!.value || 0;
        // let valor2 = +this.registroForm.controls.valorB!.value || 0;
        let resta = this.valorA - this.valorB;
        this.respuesta += "\n La resta es " + resta;
      }
      if(this.multiplicar){
        // let valor1 = +this.registroForm.controls.valorA!.value || 0;
        // let valor2 = +this.registroForm.controls.valorB!.value || 0;
        let multi = this.valorA * this.valorB;
        this.respuesta += "\n La multiplicacion es " + multi;
      }
      if(this.dividir){
        // let valor1 = +this.registroForm.controls.valorA!.value || 0;
        // let valor2 = +this.registroForm.controls.valorB!.value || 0;
        let div = this.valorA / this.valorB;
        this.respuesta += "\n La division es " + div;
      }

     /*  else{ //un aviso aparece por un segundo no esta funcionando
        this.respuesta='Debes seleccionar al menos una operación'
        setTimeout(() => {
          this.respuesta='';
        }, 1000);
      } */

      // console.log(this.respuestas);

    // this.datos.push({
    // 'valorA' : this.registroForm.get('valorA')?.value,
    // 'valorB' : this.registroForm.get('valorB')?.value
    // })
  }

  //esta es una funcion que retorna un mensaje
  //imagino que la idea es dar un mensaje distinto dependiendo del error que tenga el input pero aun no lo he agregado
  msg='';
  getErrorMessage(){
    this.msg= 'Ingrese un valor numérico';
    return this.msg
  }


   
}

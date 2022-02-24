import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
 
})
export class MainPageComponent {

  /* agregar(event: any){
    event.preventDefault();
    console.log(event);
  } */

  //Definicion de un arreglo
 /*  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]; */

  //personajes: Personaje[] = [];

   nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 10756
  }

  /*getter para obtener la informacion del servicio
  get personajes():Personaje[]{
    return this.dbzService.personajes;
  } */

  /*agregarNuevoPersonaje( data: Personaje ){
    //console.log('Main Page Component');
    //console.log(data);
    //debugger; Instruccion para depurar
    this.personajes.push(data); 
  } */
 
  /*Inyeccion de dependencias
  constructor( private dbzService: DbzService){
    //this.personajes = this.dbzService.personajes;
  }*/

  constructor(){}

  /*
  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo); 
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  } */

 /*  cambiarNombre( event:any ){
    console.log(event);
  } */

  

 

}

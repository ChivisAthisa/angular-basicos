import { Injectable } from "@angular/core";
import { Personaje } from '../interface/dbz.interface';

@Injectable()  //Indica que es una clase que se podra inyectar
export class DbzService {

    private _personajes:Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];

      get personajes(): Personaje[]{
          return [...this._personajes];
          //llaves [] indican que es un arreglo ... operador spread,separa los elementos del arreglo
          //y crea uno nuevo, rompiendo la referencia
      }

    constructor (){}

    agregarNuevoPersonaje( data: Personaje){
        this._personajes.push(data);

    }

   

}
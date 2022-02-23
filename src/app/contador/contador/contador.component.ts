import {Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `

        <h1>{{titulo}}</h1>

        <!-- El evento esta entre parentesis. La logica 
        debe estar en la parte del componente -->
        <button (click)=" numero = numero + 1 "> + 1 </button>

        <button (click)=" sumar() "> Sumar 1 </button>

        <button (click)="acumular(2) "> Acumular </button>

        <span> {{ numero }} </span>

        <button (click)=" numero = numero - 1 "> - 1 </button>

        <button (click)=" restar() "> Restar 1 </button>

        <button (click)="acumular(-2) "> Acumular </button>


        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular(base) "> Acumular + {{ base }} </button>

        <button (click)="acumular(- base) "> Acumular - {{ base }} </button>
    
    `
    
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    sumar(){
        //se hace referencia a la propiedad de la clase
        this.numero += 1;
    }

    restar(){
        this.numero -= 1;
    }

    
    acumular(valor: number){
        this.numero += valor;
    }
}
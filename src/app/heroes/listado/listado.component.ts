import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Hulk','Thor','Ironman','Capitan America','EagleEye','Viuda Negra'];
  //F1- heroeEliminado: string | undefined = '';
  heroeEliminado: string = '';
  bEliminado: boolean = false;

  borrarHeroe(): void{
    console.log('borrando...');
    //F1 - this.heroeEliminado = this.heroes.pop(); 
    this.heroeEliminado = this.heroes.pop() || '';
    this.bEliminado = true;
  }

  borrarHeroe2(): void{
    console.log('borrando...');
    const heroeBorrado = this.heroes.shift(); 
    this.heroeEliminado = heroeBorrado || '';
    console.log(heroeBorrado);
  }

  


  

}


/* Como se crea en automatico
  export class ListadoComponent implements OnInit {

  constructor() {
    //Antes de la renderizacion
    console.log( 'constructor' );
   }

  ngOnInit(): void {
    //Inicializar cosas, peticion a un servicio
    console.log( 'ngOnInit' );
  }

} */

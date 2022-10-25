import { Component } from '@angular/core';
import { PruebaService } from '../servicios/prueba.service';
@Component({
    selector: 'home',
    templateUrl: '../views/home.html',
    providers: [PruebaService]
})
export class HomeComponent{
  public titulo:string;
  public nombre:string;
  public texto: string;
  constructor(
    private _prueba: PruebaService
  ){
    this.titulo = "Yael";
    this.nombre = this._prueba.nombre;
  }
  ngOnInit(){
    console.log("Estas en home");
    this.titulo = this._prueba.mostrar(this.nombre);
  }
}

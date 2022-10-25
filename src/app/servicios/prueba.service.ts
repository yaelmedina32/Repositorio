import { Injectable } from '@angular/core';

@Injectable()

export class PruebaService{
  public nombre = "pedro";
  mostrar(nombre:string){
    this.nombre = nombre;
    return this.nombre + " como estas?";
  }
}

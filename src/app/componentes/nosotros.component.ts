import { Component } from '@angular/core';

@Component({
    selector:'nosotros',
    templateUrl:'../views/nosotros.html'
})
export class NosotrosComponent{
    public titulo:string;
    public arr:Array<any>;
    public nombre_t:string;
    constructor(){
       this.titulo = "nosotros";
       this.arr = ["Pedro", "Juan"];
       this.nombre_t = "Hola";
    }
    ngOnInit(){
      console.log("Estas en nosotros");
    }
    agregar(nombre:string){
        this.nombre_t = nombre;
        this.arr.push(this.nombre_t);
        console.log(this.arr  )
        return this.arr;
    }
}

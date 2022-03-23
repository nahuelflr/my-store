import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('solo cambio la imagen =>' ,this.img)
    //code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
 /*  counter = 0;
  counterFn: number | undefined; */

  constructor() { 
    //antes del render
    //NO async: no correr cosas como peticiones a un servidor  -- se corre solo 1 vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges){
    //antes y durante del render
    //cambios en inputs  -- va a correr las veces que nosotros actualicemos de nuestro componente
    //cambios de los imputs se detectan acá 
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //antes del render
    // se pueden correr cosas asyc por ejemplo fetch -- corre 1 sola vez 
    console.log('ngOnInit', 'imgValue =>', this.img);
   /*  this.counterFn = window.setInterval(() => {
      this.counter +=1;
      console.log(`run counter ${this.counter}`);
    }, 1000);  */

  }

  ngAfterViewInit() {
    //despues del render
    //acá se manejan los hijos 
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // se corre solo cuando se elimina el componente por ejemplo cuando un ngIf crea un componente  y lo remueve de la interfaz 
    console.log('ngOnDestroy');  
   // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}

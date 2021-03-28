import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >=0){
      this.progreso = 100;
    } else if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
    } else{
      this.progreso = this.progreso + valor;
    }

    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number){
    if(valor >= 100){
      this.progreso = 100;
    } else if(valor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.valorSalida.emit(this.progreso);
  }
}

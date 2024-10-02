import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  @Output() pesquisa: EventEmitter<string>;

  constructor() {
    this.pesquisa = new EventEmitter();
  }

 public onChange(texto: string) {
    this.pesquisa.emit(texto.toLowerCase());
    console.log(texto)
  }

}

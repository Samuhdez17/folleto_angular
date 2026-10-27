import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  styleUrl: './bienvenida.css',
  templateUrl: './bienvenida.html',
})
export class Bienvenida {
  @Output() salirDeBienvenida: EventEmitter<any> = new EventEmitter();

  salir() {
    this.salirDeBienvenida.emit(null);
  }
}

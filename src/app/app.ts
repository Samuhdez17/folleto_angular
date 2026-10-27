import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('folleto_angular');
  status = false

  salirDeBienvenida(event: any) {
    this.status = true
  }
}

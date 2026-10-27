import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})

export class Catalogo implements OnInit {
  productos!: Array<Producto>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _productosService: ProductosService,
  ) {}

  async ngOnInit() {
    this.productos = await this._productosService.getProductos()
    this._cdr.detectChanges()
  }
}

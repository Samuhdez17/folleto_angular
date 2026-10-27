import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable()
export class ProductosService {
    dirProductos = environment.productos

    constructor(
        private _http: HttpClient,
    ) {}

    async getProductos() {
        let path = this.dirProductos
        let respuesta = await fetch(path)
        let data = await respuesta.json()
        let productos: Array<Producto> = []

        for (let prod of data) {
            let producto = new Producto(prod.nombre, prod.precio, prod.imagen)
            productos.push(producto)
        }

        return productos
    }
}
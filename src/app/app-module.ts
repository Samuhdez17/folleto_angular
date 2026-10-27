import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bienvenida } from './components/bienvenida/bienvenida';
import { Navbar } from './components/navbar/navbar';
import { Catalogo } from './components/catalogo/catalogo';
import { Colaboraciones } from './components/colaboraciones/colaboraciones';
import { Personalizado } from './components/personalizado/personalizado';
import { ProductosService } from './service/productos.service';

@NgModule({
  declarations: [App, Bienvenida, Navbar, Catalogo, Colaboraciones, Personalizado],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), ProductosService],
  bootstrap: [App],
})
export class AppModule {}

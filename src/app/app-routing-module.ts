import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Colaboraciones } from './components/colaboraciones/colaboraciones';
import { Catalogo } from './components/catalogo/catalogo';
import { Personalizado } from './components/personalizado/personalizado';

const routes: Routes = [
  { path: '', component: Catalogo },
  { path: 'colaboraciones', component: Colaboraciones },
  { path: 'personalizado', component: Personalizado },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

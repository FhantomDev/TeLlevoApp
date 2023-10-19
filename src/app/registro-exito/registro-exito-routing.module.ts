import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroExitoPage } from './registro-exito.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroExitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroExitoPageRoutingModule {}

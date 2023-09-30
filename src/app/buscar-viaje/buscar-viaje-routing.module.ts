import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarViajePage } from './buscar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarViajePageRoutingModule {}

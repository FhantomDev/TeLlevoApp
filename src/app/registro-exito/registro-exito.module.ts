import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroExitoPageRoutingModule } from './registro-exito-routing.module';

import { RegistroExitoPage } from './registro-exito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroExitoPageRoutingModule
  ],
  declarations: [RegistroExitoPage]
})
export class RegistroExitoPageModule {}

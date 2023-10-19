import { Component, OnInit } from '@angular/core';
import { RegistroViajeService, viajesBase } from '../Servicios/registro-viaje.service';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {
  
  listaDeViajes: viajesBase[] = []; // Arreglo para almacenar la lista de viajes

  constructor(private registroViajes: RegistroViajeService) { }

  async ngOnInit() {
    this.listaDeViajes = await this.registroViajes.listarViajes();
  }

}

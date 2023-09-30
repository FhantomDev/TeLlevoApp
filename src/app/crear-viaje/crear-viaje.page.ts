import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viajes = {
    cantidadPasajeros:"",
    destino:"",
    horaSalida:"",
    precio:"",
  }

}

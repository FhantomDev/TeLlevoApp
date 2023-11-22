import { Component, OnInit } from '@angular/core';
import { RegistroViajeService, viajesBase } from '../Servicios/registro-viaje.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {
  
  listaDeViajes: viajesBase[] = []; // Arreglo para almacenar la lista de viajes

  constructor(private registroViajes: RegistroViajeService, private alertController: AlertController) { }

  async ngOnInit() {
    this.listaDeViajes = await this.registroViajes.listarViajes();
  }

  async alertaReserva() {
    const alerta = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Reserva exitosa',
      //message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alerta.present();
  }

}

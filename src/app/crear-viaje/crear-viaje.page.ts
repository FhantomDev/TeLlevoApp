import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../Servicios/autenticacion.service';
import { PersistenciaService } from '../Servicios/persistencia.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroViajeService } from '../Servicios/registro-viaje.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(private auth: AutenticacionService, private persistencia: PersistenciaService, private alertController: AlertController,
    private router: Router, private registroViaje: RegistroViajeService) { }

  username!: string | null;
  nombreCompleto!: string;

  ngOnInit() {
    this.recuperarDatos();
  }

  viajes = {
    cantidadPasajeros: "",
    destino: "",
    horaSalida: "",
    precio: "",
  }

  async alertaVacio() {
    const alerta = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Ingrese datos en los campos',
      //message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alerta.present();
  }

  async recuperarDatos() {
    this.username = localStorage.getItem("username");
    this.nombreCompleto = (await this.persistencia.recuperarDatos(this.username)).nombreCompleto;
  }

  registro() {
    if (this.viajes.cantidadPasajeros.trim() === "" || this.viajes.destino.trim() === "" || this.viajes.horaSalida.trim() === "" ||
      this.viajes.precio === "") {
        this.alertaVacio();
    } else {
      this.registroViaje.registroViaje(this.viajes.cantidadPasajeros, this.viajes.destino, this.viajes.horaSalida, this.viajes.precio,
        this.username, this.nombreCompleto)
    }
  }

}

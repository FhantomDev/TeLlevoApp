import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../Servicios/autenticacion.service';
import { PersistenciaService } from '../Servicios/persistencia.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroViajeService } from '../Servicios/registro-viaje.service';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(private auth: AutenticacionService, private persistencia: PersistenciaService, private alertController: AlertController,
    private router: Router, private registroViaje: RegistroViajeService, private geolocationService: GeolocationService ) { }

  username!: string | null;
  nombreCompleto!: string;
  direccionActual!: string;

  viajes = {
    cantidadPasajeros: "",
    lugarSalida: "",
    destino: "",
    horaSalida: "",
    precio: "",
  }

  ngOnInit() {
    this.recuperarDatos();
    this.obtenerDireccion();
  }

  async obtenerDireccion() {
    try {
      this.direccionActual = await this.geolocationService.obtenerDireccionActual();
      this.viajes.lugarSalida = this.direccionActual;
    } catch (error) {
      console.error('Error al obtener la dirección desde ', error);
    }
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
    if (this.viajes.cantidadPasajeros.trim() === "" || this.viajes.lugarSalida.trim() === "" || this.viajes.destino.trim() === "" || this.viajes.horaSalida.trim() === "" ||
      this.viajes.precio === null || this.viajes.precio === "") {
        this.alertaVacio();
    } else {
      this.registroViaje.registroViaje(this.viajes.cantidadPasajeros, this.viajes.lugarSalida, this.viajes.destino, this.viajes.horaSalida, this.viajes.precio,
        this.username, this.nombreCompleto)
    }
  }

}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from './autenticacion.service';
import { PersistenciaService } from './persistencia.service';

export interface viajesBase {
  username: string | null;
  pasajeros: string;
  destino: string;
  hora: string;
  precio: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})

export class RegistroViajeService {

  constructor(private storage: Storage, private router: Router, private alertController: AlertController,
    private auth: AutenticacionService) { }

  username!: string | null;
  nombreCompleto!: string;

  async alertaExiste() {
    const alerta = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Viaje ya existente',
      //message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alerta.present();
  }

  //Registro del viaje
  async registroViaje(pasajeros: string, destino: string, hora: string, precio: string, username: string | null, nombre: string) {
    const viajes = await this.auth.llamarBaseDatos().get('viajes') || [];
    const existe = viajes.find((us: viajesBase) => us.username === username && us.pasajeros === pasajeros && us.destino === destino
      && us.hora === hora && us.precio === precio);
    if (existe) {
      console.log("Viaje existente")
      this.alertaExiste();
    } else {
      const nuevo: viajesBase = { pasajeros, destino, hora, precio, username, nombre };
      viajes.push(nuevo);
      await this.auth.llamarBaseDatos().set('viajes', viajes);
      console.log("Viaje guardado")
      this.router.navigate(['/registro-exito'], { queryParams: { mensaje: '¡Viaje publicado con exitoso!' } });
    }
  }

  async listarViajes(): Promise<viajesBase[]> {
    const viajes = await this.auth.llamarBaseDatos().get('viajes') || [];
    return viajes;
  }

}

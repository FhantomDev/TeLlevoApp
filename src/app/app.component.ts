import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AutenticacionService } from './Servicios/autenticacion.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private platform: Platform, private auth: AutenticacionService, private geo: Geolocation) {
this.iniciarStorage();
this.getGeo();
}

latitud: number | undefined;
longitud: number | undefined;

   iniciarStorage() {
    this.platform.ready().then(async () => {
      await this.storage.create();
    })
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

  async getGeo() {
      const coordinates = await Geolocation.getCurrentPosition();
      this.longitud = coordinates.coords.longitude;
      this.latitud = coordinates.coords.latitude;
      console.log('Current position:', this.latitud+" "+this.longitud);

  }
}

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AutenticacionService } from './Servicios/autenticacion.service';
import { GeolocationService } from './geolocation.service';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController, private router: Router, private storage: Storage, private platform: Platform, private auth: AutenticacionService, ) {
    this.iniciarStorage();
  }

  latitud: number | undefined;
  longitud: number | undefined;

  iniciarStorage() {
    this.platform.ready().then(async () => {
      await this.storage.create();
    })
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

  esHome(): boolean {
    return this.router.url === '/home';
  }

  esLogin(): boolean {
    return this.router.url === '/login';
  }

  handleBackButton() {
    if (this.esHome() || this.esLogin()) {
      this.confirmarSalir();
    } else {
      this.router.navigate(['/home']);
    }
  }

  async confirmarSalir() {
    const alert = await this.alertController.create({
      header: 'Confirmar salida',
      message: '¿Quieres salir de la aplicación?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.salirApp();
          }
        }
      ]
    });

    await alert.present();
  }

  salirApp() {
    App['exitApp']();
  }
}

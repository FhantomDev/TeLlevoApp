import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AutenticacionService } from './Servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private platform: Platform, private auth: AutenticacionService) {
    this.iniciarStorage();
  }

  iniciarStorage() {
    this.platform.ready().then(async () => {
      await this.storage.create();
    })
  }

  loguot() {
    this.auth.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from '../Servicios/autenticacion.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController, private auth: AutenticacionService) { }

  ngOnInit() {
  }

  usuario = {
    username: ""
  }

  async alertaVacio() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Ingrese su correo en el campo',
      //message: 'This is an alert!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertaNoEncontrado() {
    const alerta = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Usuario no encontrado',
      //message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alerta.present();
  }

  //Si es true redirige a home
  //Si los input estan vacios avisa de que debe ingresar datos
  //Si es falso avisa de que el usuario no existe
  recuperar() {
    this.auth.recuperar(this.usuario.username).then(() => {
      if (this.auth.activo) {
        this.router.navigate(['/login']);
      } else if (this.usuario.username === "") {
        this.alertaVacio()
      } else {
        this.alertaNoEncontrado();
      }
    })
  }

}

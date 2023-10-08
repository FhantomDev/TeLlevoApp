import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar, IonImg } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AutenticacionService } from '../Servicios/autenticacion.service';
import { PersistenciaService } from '../Servicios/persistencia.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonImg, { read: ElementRef }) logo!: ElementRef<HTMLIonImgElement>;

  private animation!: Animation;
  constructor(private persistencia: PersistenciaService, private auth: AutenticacionService, private router: Router,
    private animationCtrl: AnimationController, private alertController: AlertController) {

    const username = localStorage.getItem('username');
    if (username) {
      this.persistencia.inicioAutomatico(username);
    }

  }

  public mensaje = ""

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(5000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(0.5)', opacity: '0' },
        { offset: 0.25, transform: 'scale(0.75)', opacity: '0.25' },
        { offset: 0.50, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.75, transform: 'scale(1)', opacity: '0.75' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    this.animation.play();
  }

  usuarios = {
    username: "",
    password: ""
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
  iniciarSesion() {
    this.auth.login(this.usuarios.username, this.usuarios.password).then(() => {
      if (this.auth.activo) {
        this.router.navigate(['/home']);
      } else if (this.usuarios.username === "" || this.usuarios.password === "") {
        this.alertaVacio();
      } else {
        this.alertaNoEncontrado();
      }
    });
  }

}

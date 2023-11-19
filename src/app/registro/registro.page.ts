import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutenticacionService } from '../Servicios/autenticacion.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  constructor(private router: Router, private auth: AutenticacionService, private alertController: AlertController) { }
  public mensaje = ""

  ngOnInit() {
  }

  usuarios = {
    username: "",
    nombre: "",
    apellido: "",
    password: "",
    tipoUsuario: ""
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

  //Falta agregar los campos nombre y apellido, la validacion y mensajes
  registro() {
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.usuarios.username === "" || this.usuarios.nombre === "" || this.usuarios.apellido === "" || this.usuarios.password === "" || this.usuarios.tipoUsuario === "") {
      this.alertaVacio();
    } else {
      this.auth.registro(this.usuarios.username, this.usuarios.password, this.usuarios.nombre, this.usuarios.apellido, this.usuarios.tipoUsuario);
      this.router.navigate(['/registro-exito'], { queryParams: { mensaje: '¡Registro exitoso!' } });
    }
  }
}



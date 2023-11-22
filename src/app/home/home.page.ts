import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../Servicios/autenticacion.service';
import { PersistenciaService } from '../Servicios/persistencia.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private auth: AutenticacionService,
    private persistencia: PersistenciaService, private alertController: AlertController) {}

  //Declarar las variables indicando que no seran nulas
  username!: string | null;
  nombreCompleto!: string;
  tipoUsuario!: string | undefined;

  public usuario = {
    user: "",
    password: ""
  }

  ngOnInit() {
    //Usamos la función al cargar la pagina
    this.recuperarDatos();
    this.recuperarTipoUsuario();
  }
  
  //Función donde se recupera el username y se la pasa a la función para recuperar los datos
  async recuperarDatos() {
    this.username = localStorage.getItem("username");
    this.nombreCompleto = (await this.persistencia.recuperarDatos(this.username)).nombreCompleto;
  }

  async recuperarTipoUsuario() {
    this.username = localStorage.getItem("username");
    this.tipoUsuario = (await this.persistencia.recuperarTipoUsuario(this.username)).tipoUsuario;
  }

  async alertaAyuda() {
    const alerta = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'No hay ayuda :(',
      //message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alerta.present();
  }
}

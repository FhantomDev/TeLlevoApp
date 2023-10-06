import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../Servicios/autenticacion.service';
import { PersistenciaService } from '../Servicios/persistencia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private auth: AutenticacionService,
    private persistencia: PersistenciaService) {}

  //Declarar las variables indicando que no seran nulas
  username!: string | null;
  nombreCompleto!: string;

  public usuario = {
    user: "",
    password: ""
  }

  ngOnInit() {
    //Usamos la función al cargar la pagina
    this.recuperarDatos();
  }
  
  //Función donde se recupera el username y se la pasa a la función para recuperar los datos
  async recuperarDatos() {
    this.username = localStorage.getItem("username");
    this.nombreCompleto = await this.persistencia.recuperarDatos(this.username);
  }

}

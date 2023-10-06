import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { PersistenciaService } from '../Servicios/persistencia.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private persistencia: PersistenciaService) { }

  username! :string | null;
  nombreCompleto! : string;

  ngOnInit() {
    this.recuperarDatos();
  }

  async recuperarDatos() {
    this.username = localStorage.getItem("username");
    this.nombreCompleto = await this.persistencia.recuperarDatos(this.username);
  }

}


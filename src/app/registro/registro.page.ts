import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutenticacionService } from '../Servicios/autenticacion.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  constructor(private router: Router, private auth: AutenticacionService) { }
  public mensaje = ""

  ngOnInit() {
  }

  usuarios = {
    username: "",
    nombre: "",
    apellido: "",
    password: ""
  }

  //Falta agregar los campos nombre y apellido, la validacion y mensajes
  registro() {
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.mensaje = "Registro Exitoso"
    this.auth.registro(this.usuarios.username, this.usuarios.password, this.usuarios.nombre, this.usuarios.apellido);
  }
}



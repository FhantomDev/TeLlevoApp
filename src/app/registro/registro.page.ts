import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  constructor(private router: Router) { }
  public mensaje = ""

  ngOnInit() {
  }

  user = {
    usuario: "",
    nombre: "",
    apellido: "",
    password: ""
  }

  registro() {
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.user.usuario != "" && this.user.password != "" && this.user.nombre != "" && this.user.apellido != "") {
      if (validarEmail.test(this.user.usuario)) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/login'], navigationExtras);
      } else {
        this.mensaje = "El correo electrónico no es válido";
      }
    } else {
      this.mensaje = "Dato invalido en el formulario de registro";
    }
  }
}



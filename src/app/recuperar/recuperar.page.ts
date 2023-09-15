import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private router: Router) { }
  public mensaje = ""

  ngOnInit() {
  }

  user = {
    usuario: ""
  }

  recuperar() {
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.user.usuario != "") {
      if (validarEmail.test(this.user.usuario)) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/login'], navigationExtras);
      } else {
        this.mensaje = "El correo electrónico no es válido";
      }
    } else {
      this.mensaje = "Dato invalido";
    }
  }
}

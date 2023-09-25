import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar,IonImg } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AutenticacionService } from '../Servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonImg,{read:ElementRef}) logo!:ElementRef<HTMLIonImgElement>;

  private animation!:Animation;
  constructor(private auth: AutenticacionService, private router: Router, private animationCtrl:AnimationController) { }
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
    user: "",
    password: ""
  }
  
  iniciarSesion() {
    this.auth.login(this.usuarios.user, this.usuarios.password).then(() => {
      if (this.auth.activo) {
        let navigationExtras: NavigationExtras = {
          state: { usuario: this.usuarios }
        }
        this.router.navigate(['/home'], navigationExtras);
      } else {
        this.mensaje = "Debe ingresar sus credenciales";
      }
    });
  }
}

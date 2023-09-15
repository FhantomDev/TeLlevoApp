import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar,IonImg } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonImg,{read:ElementRef}) logo!:ElementRef<HTMLIonImgElement>;

  private animation!:Animation;
  constructor(private router: Router, private animationCtrl:AnimationController) { }
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

  user = {
    usuario: "",
    password: ""
  }
  
  iniciarSesion() {
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.user.usuario != "" && this.user.password != "") {
      if (validarEmail.test(this.user.usuario)) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/home'], navigationExtras);
      } else {
        this.mensaje = "El correo electrónico no es válido";
      }
    } else {
      this.mensaje = "Correo o contraseña erronea";
    }
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Router } from '@angular/router';

interface Usuarios {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private base!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
  }

  async init() {
    const storage = await this.storage.create();
    this.base = storage;
  }

  public activo!: Boolean;
  public user = {
    username: "",
    password: ""
  }

  //Funcion de registro
  //Falta mejorar la validación
  async registro(username: string, password: string) {
    const users = await this.base?.get('users') || [];
    const existe = users.find((us: Usuarios) => us.username === username && us.password === password);
    if (existe) {
      console.log("Usuario Existente")
    } else {
      const nuevo: Usuarios = { username, password };
      users.push(nuevo);
      await this.base.set('users', users);
      console.log("Registro Exitoso")
    }
  }

  //Función de iniciar sesión
  async login(username: string, password: string): Promise<boolean> {
    const users: Usuarios[] = (await this.base.get('users')) || [];
    const user = users.find((us: Usuarios) => us.username === username && us.password === password);
    if (user) {
      this.activo = true;
      return true;
    }
    this.activo = false;
    return false;

  }

  //Función de cerrar sesión
  logout() {
    this.activo = false;
    this.route.navigate(['/login']);
  }
}

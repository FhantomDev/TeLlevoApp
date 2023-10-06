import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Router } from '@angular/router';

 interface usuariosBase {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
}


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  public baseDatos!: Storage;

  constructor(private storage: Storage, private router: Router) {
    this.init()
  }


  async init() {
    const storage = await this.storage.create();
    this.baseDatos = storage;
  }

  //Variable para saber si el usuario esta registrado
  public activo!: Boolean;

  //Funcion de registro
  //Falta mejorar la validación
  async registro(username: string, password: string, nombre: string, apellido: string) {
    const users = await this.baseDatos?.get('users') || [];
    const existe = users.find((us: usuariosBase) => us.username === username && us.password === password);
    if (existe) {
      console.log("Usuario Existente")
    } else {
      const nuevo: usuariosBase = { username, password, nombre, apellido };
      users.push(nuevo);
      await this.baseDatos.set('users', users);
      console.log("Registro Exitoso")
    }
  }

  //Función de iniciar sesión
  async login(username: string, password: string): Promise<boolean> {
    const users: usuariosBase[] = (await this.baseDatos.get('users')) || [];
    const usuarioExiste = users.find((us: usuariosBase) => us.username === username && us.password === password);
    if (usuarioExiste) {
      this.activo = true;
      //Guardar el username en el local storage para la percistencia
      localStorage.setItem('username', username);
      return true;
    }
    this.activo = false;
    return false;
  }

  //Función de cerrar sesión
  cerrarSesion() {
    this.activo = false;
    this.router.navigate(['/login']);
    //Eliminamos del local storage el item
    localStorage.removeItem("username");
  }

  llamarBaseDatos(): Storage {
    return this.baseDatos;
  }

}
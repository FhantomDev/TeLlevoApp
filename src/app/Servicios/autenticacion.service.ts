import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface usuariosBase {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  tipoUsuario: string;
}

interface viajesBase {
  username: string | null;
  pasajeros: string;
  destino: string;
  hora: string;
  precio: string;
}


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  public baseDatos!: Storage;

  constructor(private storage: Storage, private router: Router, private alertController: AlertController) {
    this.init()
  }


  async init() {
    const storage = await this.storage.create();
    this.baseDatos = storage;
  }

  //Variable para saber si el usuario esta registrado
  public activo!: Boolean;

  //Funcion de registro
  async registro(username: string, password: string, nombre: string, apellido: string , tipoUsuario: string) {
    const users = await this.baseDatos?.get('users') || [];
    const existe = users.find((us: usuariosBase) => us.username === username && us.password === password);
    if (existe) {
      console.log("Usuario Existente")
    } else {
      const nuevo: usuariosBase = { username, password, nombre, apellido, tipoUsuario };
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
    } else {
      this.activo = false;
      return false;
    }
  }

  //Función de cerrar sesión
  cerrarSesion() {
    this.activo = false;
    this.router.navigate(['/login']);
    //Eliminamos del local storage el item
    localStorage.removeItem("username");
  }

  //Para usar la base desde otros archivos
  llamarBaseDatos(): Storage {
    return this.baseDatos;
  }

  async recuperar(username: string): Promise<boolean> {
    const users: usuariosBase[] = (await this.baseDatos.get('users')) || [];
    const usuarioExiste = users.find((us: usuariosBase) => us.username === username);
    if (usuarioExiste) {
      this.activo = true;
      return true;
    }
    this.activo = false;
    return false;
  }
  
}
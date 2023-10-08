import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
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
export class PersistenciaService {
  constructor(private auth: AutenticacionService, private router: Router) {
  }

  //Iniciar sesión automaticamente si ya se inicio y no se ha cerrado
  async inicioAutomatico(username: string): Promise<boolean> {
    const users: usuariosBase[] = (await this.auth.llamarBaseDatos().get('users')) || [];
    const usuarioExiste = users.find((us: usuariosBase) => us.username === username);
    if (usuarioExiste) {
      this.auth.activo = true;
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }
  
    //Recuperar los datos del usuario pasando el username almacenado en el local storage como parametro
    async recuperarDatos(username: string | null) {
      const users: usuariosBase[] = (await this.auth.llamarBaseDatos().get('users')) || [];
      const usuarioExiste = users.find((us: usuariosBase) => us.username === username);
      const nombreCompleto = usuarioExiste?.nombre + " " + usuarioExiste?.apellido;
      const userName = usuarioExiste?.username;
      return {nombreCompleto, userName};
    }
}

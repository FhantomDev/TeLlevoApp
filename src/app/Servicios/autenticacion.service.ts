import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }
  public activo!: Boolean;
  public user = {
    username: "",
    password: ""
  }

  login(username: any, password: any){
    if(username == 'irvin@duoc.cl' && password == '1234'){
      this.user.username=username;
      this.user.password=password;
      this.activo = true;
    } else {
      this.activo = false;
    }
  }

  logout() {
    this.user.username = ""
    this.user.password = ""
    this.activo = false;
  }
}

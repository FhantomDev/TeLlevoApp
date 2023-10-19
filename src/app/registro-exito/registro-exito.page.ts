import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-exito',
  templateUrl: './registro-exito.page.html',
  styleUrls: ['./registro-exito.page.scss'],
})
export class RegistroExitoPage implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.mensaje = params['mensaje'];
    });
  }

  public mensaje=""
  

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {}

  public usuario = {
    user: "",
    password: ""
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.usuario.user = state['usuario'].user;
        this.usuario.password = state['usuario'].password;
      }
    })
  }
}

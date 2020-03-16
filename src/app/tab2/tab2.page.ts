import { Component } from '@angular/core';
import { ListadoServicerService } from '../services/listado-servicer.service';
import { ListadoInterface } from '../models/listado-interface';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lista: ListadoInterface[];
   plantel;

  constructor(private listadoService: ListadoServicerService, public router: Router) {
    this.lerrListado();
  }

  lerrListado() {
    this.listadoService.getList()
      .subscribe(
        rs => this.lista = rs,
        er => console.log(er),
        () => console.log(this.lista)
      );
  }

  openDetailWithState(id) {
    const idEvento = id;
    const navigationExtras: NavigationExtras = {
      state: {id: idEvento }
      // state: {
      //   user: this.lista
      // }
    };
    this.router.navigate(['detalle'], navigationExtras);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ListadoServicerService } from '../services/listado-servicer.service';
import { ListadoInterface } from '../models/listado-interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  id: any;
  evento: ListadoInterface;
  deleteEventRes;
  constructor(private router: Router, private ls: ListadoServicerService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.id = this.router.getCurrentNavigation().extras.state.id;
      console.log('id', typeof (this.id));
    }

    this.getDetalle(this.id);
  }

  ngOnInit() {
  }

  getDetalle(id) {
    this.ls.getEventById(id)
      .subscribe(
        res => this.evento = res[0],
        err => {
          return console.log(err);
        },
        () => console.log(this.evento)
      );
  }

  deleteEvent(id) {
    this.ls.delEvent(id)
      .subscribe(
        res => this.deleteEventRes = res,
        er => console.log(er),
        () => console.log(this.deleteEventRes)
      );
  }

  toTab3() {
    const navigationExtras: NavigationExtras = {
      state: { latitud: this.evento.latitud,
        longitud: this.evento.longitud }
    };
    this.router.navigate(['tab3'], navigationExtras);
  }

}

import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public lat = 19.292120;
  public lng = -99.655777;

  public origin: {};
  public destination: any;

  latitudE;
  longitudE;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.latitudE = this.router.getCurrentNavigation().extras.state.latitud;
      this.longitudE = this.router.getCurrentNavigation().extras.state.longitud;
    }
    // console.log(typeof(+this.latitudE), typeof(this.longitudE));
  }


  getDirection() {
    this.origin = { lat: 19.292120, lng: -99.655777 };
    this.destination = { lat: +this.latitudE, lng: +this.longitudE };
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

}

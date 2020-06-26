import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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

  constructor(private router: Router, private geolocation: Geolocation) {
    this.location();
    if (this.router.getCurrentNavigation().extras.state) {
      this.latitudE = this.router.getCurrentNavigation().extras.state.latitud;
      this.longitudE = this.router.getCurrentNavigation().extras.state.longitud;
    }
    // console.log(typeof(+this.latitudE), typeof(this.longitudE));
  }

  location() {
    this.geolocation.getCurrentPosition().then((resp) => {

      console.log(resp.coords.latitude + ' ' + resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.
      this.origin = { lat: +resp.coords.latitude, lng: resp.coords.longitude };
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  getDirection() {

    if (this.latitudE !== '' || this.latitudE !== null) {
      this.destination = { lat: +this.latitudE, lng: +this.longitudE };
    }
    alert('Es necesario que yá háyas elegído un evento para utilizar la ruta correctamente!');
    // this.origin = { lat: 19.292120, lng: -99.655777 };
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

}

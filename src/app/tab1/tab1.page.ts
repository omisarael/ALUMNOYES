import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertCtrl: AlertController) { }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      message: 'La finalidad es crear mayor integración de la comunidad estudiantil con la Universidad mediante la mejora de difusion de nuestros eventos Académicos, Deportivos, Culturales e Institucionales, ahora solo te toca participar...¡¡  ',
      buttons: ['OK']
    });
    await alert.present();
  }

}

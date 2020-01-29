import { ModalFormComponent } from './../modal-form/modal-form.component';
import { ModalComponent } from './../modal/modal.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async openModalStar() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-modal-css-star'
    });
    return await modal.present();
  }
  async openModalForm() {
    const modal = await this.modalController.create({
      component: ModalFormComponent,
      cssClass: 'my-custom-modal-css-form'
    });
    return await modal.present();
  }
}

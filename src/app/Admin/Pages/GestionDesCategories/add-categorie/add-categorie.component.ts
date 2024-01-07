import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from 'src/app/Admin/Beans/Category';
import { CategorieServiceAd } from 'src/app/Admin/Services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss'],
})
export class AddCategorieComponent{

  newCategorie=new Category();

  constructor(private modalController: ModalController ,public _serviceCategorie:CategorieServiceAd) {}


  submitForm() {
    // Traitez les données du formulaire ici
    this._serviceCategorie.addCategorie(this.newCategorie);

    // Fermez le modal
    this.modalController.dismiss();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}

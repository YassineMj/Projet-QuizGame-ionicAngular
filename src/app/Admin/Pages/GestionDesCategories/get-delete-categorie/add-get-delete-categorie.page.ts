import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { CategorieService } from 'src/app/Utilisateur/Services/categorie.service';
import { CategorieServiceAd } from 'src/app/Admin/Services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-get-delete-categorie',
  templateUrl: './add-get-delete-categorie.page.html',
  styleUrls: ['./add-get-delete-categorie.page.scss'],
})
export class AddGetDeleteCategoriePage implements OnInit {


  ngOnInit() {
  }

  constructor(public modalController: ModalController ,public _serviceCategorie: CategorieService ,private _serviceCategorieAd:CategorieServiceAd ,  private router: Router) {}

  async openForm() {
    const modal = await this.modalController.create({
      component: AddCategorieComponent, // Remplacez YourFormComponent par le nom réel de votre composant de formulaire
    });

    await modal.present();
  }

  deleteItem(key:string): void {
    this._serviceCategorieAd.deleteCategory(key)
      .then(() => {
        console.log('Catégorie supprimée avec succès.');
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de la catégorie :', error);
      });
  }

  detailsCategorie(categoryId:string){
    this.router.navigate(['/update-categorie', categoryId]);
  }
}

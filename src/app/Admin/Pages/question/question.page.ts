import { Component, OnInit } from '@angular/core';
import { Reponse } from '../../Beans/Reponse';
import { Question } from '../../Beans/Question';
import { CategorieService } from 'src/app/Utilisateur/Services/categorie.service';
import { CategorieServiceAd } from '../../Services/categorie.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {


  question=new Question();

  reponses: Reponse[] = [
    new Reponse(),
    new Reponse(),
    new Reponse(),
  ];

  constructor(public _serviceCategorieUt : CategorieService , private _serviceCategorieAd:CategorieServiceAd) {}

  ngOnInit() {
  }

  selectedCategory: string;

  submitForm() {
    this.question.reponses=this.reponses;
    // Utilisez this.selectedCategory, this.texteQuestion et this.reponses pour envoyer les données à Firebase ou effectuer d'autres opérations
    console.log('Catégorie sélectionnée:', this.selectedCategory);
    console.log('Texte de la question:', this.question.texteQuestion);
    console.log('Réponses:', this.question.reponses);

    this._serviceCategorieAd.addQuestionToCategory(this.selectedCategory,this.question)
  }
}

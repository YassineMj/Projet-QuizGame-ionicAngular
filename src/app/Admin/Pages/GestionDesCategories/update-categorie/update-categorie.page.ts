import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/Utilisateur/Services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.page.html',
  styleUrls: ['./update-categorie.page.scss'],
})
export class UpdateCategoriePage implements OnInit {

  categoryId: any;
  questions:any;
  nomCategorie:string;

  constructor(private route: ActivatedRoute , public _serviceCategorie:CategorieService) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    console.log(this.categoryId);

    for(let c of this._serviceCategorie.categories){
      if(c.$key==this.categoryId){
        this.questions=c.data.questions;
        this.nomCategorie=c.data.nomCategorie;
      }
    }
  }

  selectedQuestion: any;
  showAnswers(question: any) {
    if (this.selectedQuestion === question) {
      this.selectedQuestion = null;
    } else {
      // Sinon, ouvrez la question
      this.selectedQuestion = question;
    }
  }

  deleteQuestion(index:number){
    console.log(index);
    
  }

}

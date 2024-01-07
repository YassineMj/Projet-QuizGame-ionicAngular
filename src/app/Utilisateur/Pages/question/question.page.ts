import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../Services/categorie.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  categoryId: any;
  questions:any;


  constructor(private route: ActivatedRoute , public _serviceCategorie:CategorieService) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    
    for(let c of this._serviceCategorie.categories){
      if(c.$key==this.categoryId){
        this.questions=c.data.questions;
        break;
      }
    }
  }


  selectedAnswer: any;

  checkAnswer(answer: any) {
    this.selectedAnswer = answer;
  }

  getAnswerClass(answer: any): string {
    if (this.selectedAnswer === answer && answer.estCorrecte) {
      return 'correct-answer';
    } else if (this.selectedAnswer === answer && !answer.estCorrecte) {
      return 'incorrect-answer';
    } else {
      return '';
    }
  }

}

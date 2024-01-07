import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../Services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  constructor(public _serviceCategorie : CategorieService , private router: Router) { 
  }


  ngOnInit() {
  }

  navigateToQuestions(categoryId:string){
    this.router.navigate(['/question', categoryId]);
  }

}

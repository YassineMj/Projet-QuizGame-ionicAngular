import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../Utilisateur/Services/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private router: Router , public _serviceCategorie : CategorieService) { }

  ngOnInit() {
    this._serviceCategorie.getAll().subscribe((data)=>{
      this._serviceCategorie.categories=data;
      console.log(this._serviceCategorie.categories);
    })
  }

  navigateToCategories(){
    this.router.navigate(['/categorie']);
  }

  navigateToAuth(){
    this.router.navigate(['/auth']);
  }
}

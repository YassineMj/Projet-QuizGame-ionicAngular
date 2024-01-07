import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Category } from '../Beans/Category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Question } from '../Beans/Question';
import { take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CategorieServiceAd {

  constructor(private afDatabase: AngularFireDatabase) { }

  addCategorie(newCategorie : Category){
    this.afDatabase.list('categories').push(newCategorie)
    .then(() => {
      console.log('Données ajoutées avec succès.');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout des données :', error);
    });
  }

  addQuestionToCategory(categoryKey: string, question: any): Promise<void> {
    const categoryQuestionsRef = this.afDatabase.object(`categories/${categoryKey}/questions`);

    return categoryQuestionsRef.valueChanges().pipe(
      take(1),
    ).toPromise().then((value: unknown) => {
      const questions = value as any[] || [];

      // Assurez-vous que questions est bien un tableau
      if (!Array.isArray(questions)) {
        throw new Error("Les questions ne sont pas un tableau.");
      }

      // Ajouter la nouvelle question à l'array existant
      questions.push(question);

      return categoryQuestionsRef.set(questions)
        .then(() => {
          console.log('Question ajoutée avec succès à la catégorie.');
        })
        .catch((error) => {
          console.error('Erreur lors de l\'ajout de la question :', error);
          throw error;
        });
    });
  }

  deleteCategory(categoryKey: string): Promise<void> {
    const categoryRef = this.afDatabase.object(`categories/${categoryKey}`);
    return categoryRef.remove();
  }
}

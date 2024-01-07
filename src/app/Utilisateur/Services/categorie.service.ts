import { Injectable } from '@angular/core';
import { AngularFireList , AngularFireObject , AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  ListRef : AngularFireList<any> ;
  categories:any[];

  constructor( private db:AngularFireDatabase) { 
    this.ListRef=db.list('/categories');
  }

  getAll(): Observable<any[]> {
    return this.ListRef.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          data:c.payload.val()
        }));
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth:boolean=false;

  constructor(private afAuth: AngularFireAuth) {
    
  }

  // Fonction pour se connecter avec un email et un mot de passe
  signIn(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Fonction pour se déconnecter
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

}

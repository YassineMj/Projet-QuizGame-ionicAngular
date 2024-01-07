import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage{

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.signIn(this.email, this.password)
      .then(() => {
        this.router.navigate(['/tabs']); // Rediriger vers la page d'accueil après la connexion
      })
      .catch(error => {
        console.error(error.message);
      });
  }

}

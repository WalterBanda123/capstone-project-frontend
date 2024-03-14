import { Injectable } from '@angular/core';
import { Auth, User, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticatedUser: User | null = null

  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authenticatedUser = user
        localStorage.setItem("user", JSON.stringify(this.authenticatedUser))
      }
      else {
        localStorage.setItem('user', 'null')
      }
    })
  }

  get isUserLoggedIn() {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token as string)
    return user !== null ? true : false
  }

  handleUserLogin(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then((response) => {
      console.log('Successful Authentication: ', response);
      this.router.navigate(['dashboard'])
    }).catch((error) => {
      console.log('Auth failed, Auth error: ', error);
    })
  }

  handleGoogleSignIn() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((response) => {
      console.log('Google Auth response: ', response);
      this.router.navigate(['dashboard'])
    }).catch((error) => {
      console.log('Google Auth Error: ', error);

    })
  }
}

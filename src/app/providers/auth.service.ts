import { Injectable } from '@angular/core';
import { Auth, User, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailLink, ActionCodeSettings, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticatedUser: User | null = null

  constructor(private auth: Auth, private router: Router, private _snackbar: MatSnackBar) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authenticatedUser = user
        localStorage.setItem("user", JSON.stringify(this.authenticatedUser))
        console.log('auth user: ', this.authenticatedUser.uid);
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

  async handleUserLogin(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then((response) => {
      this.router.navigate(['dashboard'])
      console.log(response);
      this._snackbar.open('Successfully logged in', '', { duration: 5000, panelClass: ['custom-snackbar'], horizontalPosition: 'right', verticalPosition: 'top' })
    }).catch((error) => {
      console.log('Auth failed, Auth error: ', error);
    })
  }

  async handleGoogleSignIn() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider()).then((response) => {
      this.router.navigate(['dashboard'])
      this._snackbar.open('Successfully logged in', '', { duration: 5000, panelClass: ['custom-snackbar'], horizontalPosition: 'right', verticalPosition: 'top' })
    }).catch((error) => {
      console.log('Google Auth Error: ', error);
    })
  }

  async signUpWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider()).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  registerUser(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }


  async signOutUser() {
    return signOut(this.auth).then((response) => {
      this.router.navigate(['login'])
      localStorage.removeItem('user')
    }).catch((error) => {
      console.log(error);
    })
  }

  async changePassword(email: string) {
    return sendPasswordResetEmail(this.auth, email, { url: 'http://localhost:4200/reset-password' }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }



  async resetPassword(newPassword: string, oobCode: string) {
    return confirmPasswordReset(this.auth, oobCode, newPassword)
  }
}

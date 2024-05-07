import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;
  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log('This user still login this email', user.email);
      } else {
        this.uid = undefined;
        console.log('User Logout');
      }
    });
  }

  isAuthenticated() {
    return this.uid ? true : false;
  }

  getUi() {
    return this.uid;
  }
  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/']);
        alert('SingUp Succesfully!');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('SomeThing want to wrong pleace try again');
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        this.router.navigate(['/']);
        alert('Login Succesfully!');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  logoutUser() {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      alert('SomeThing want to wrong pleace try again');
    });
  }
}

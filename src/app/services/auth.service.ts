import { Injectable } from '@angular/core';
import {FirebaseAuth} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

export interface User {
  uid?: string;
  email: string;
  snils: string;
  name?: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  snils: string;
  phone: string;
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(switchMap((user) => {
      if (user) {
        return this.afs.doc<User>(`/users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  public login(creds: LoginCredentials): void {
    this.afAuth.auth.signInWithEmailAndPassword(creds.email, creds.password);
  }

  public register(creds: RegisterCredentials): void {
    this.afAuth.auth.createUserWithEmailAndPassword(creds.email, creds.password).then((data) => {
      this.updateUserData({
        uid: data.user.uid,
        email: data.user.email,
        snils: creds.snils,
        name: creds.name
      });
    });
  }

  private updateUserData(userData: any): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`/users/${userData.uid}`);
    return userRef.set(userData);
  }
}

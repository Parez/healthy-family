import { Injectable } from '@angular/core';
import {FirebaseAuth} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {FamilyMember} from '../models/family-member';
import {Family} from '../models/family';

const family: Family = {
  name: 'Наша Семья',
  members: [
    {
      displayName: 'Мама',
      firstName: 'Марина'
    },
    {
      displayName: 'Папа',
      firstName: 'Андрей'
    }
  ],
};

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  authState: FirebaseAuth = null;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
  }

  public getFamily(): Family {
    return family;
  }
}

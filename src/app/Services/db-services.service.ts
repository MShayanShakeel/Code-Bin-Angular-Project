import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Snippets } from '../../Models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DbServicesService {
  private db?: any;
  constructor(private getauthService: AuthService , private router : Router) {
    this.db = getFirestore();
  }

  async createBinCode(codeSnippet: Snippets) {
    try {
      const docRef = await addDoc(collection(this.db, 'codeSnippet'), {
        ...codeSnippet,
        by: this.getauthService.getUi(),
      });
      console.log('Document written with ID: ', docRef.id);
      this.router.navigate(['/'])

    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getAllSnipppet() {
    let result: any = [];
    const querySnapshot = await getDocs(collection(this.db, 'codeSnippet'));
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
  }

  async getSingleSnipppet(docId: string) {
    const docRef = doc(this.db, 'codeSnippet', docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
      return {
        id: 'not Found',
        title: 'not Found',
        code: 'not Found',
      };
    }
  }
}

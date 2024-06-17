import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore: Firestore = inject(Firestore);

  constructor() {
  }

  async addUser(userData: object) {
    await addDoc(this.getUserRef(), userData);
  }

  getUserRef() {
    return collection(this.firestore, "user");
  }
}

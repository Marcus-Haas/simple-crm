import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot, doc, updateDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  userId: string = '';
  constructor() {
  }

  async addUser(userData: object) {
    await addDoc(this.getUserRef(), userData)
      .then((docRef) => {
        this.userId = docRef.id;
      });
    let userDoc = this.getSingleUserRef("user", this.userId);
    await updateDoc(userDoc, { id: this.userId });
  }

  ReadData(array: object[]) {
    return onSnapshot(this.getUserRef(), (element) => {
      array.length = 0;
      element.forEach(user => {
        array.push(user.data());
      });
    });
  }

  async updateUser(user: User, docId: string) {
    let userDoc = this.getSingleUserRef("user", docId);
    await updateDoc(userDoc, user.toJSON());
  }

  getUserRef() {
    return collection(this.firestore, "user");
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  userId: string = '';
  constructor() {
  }

  async addUser(collectionName: any, userData: object) {
    await addDoc(this.getUserRef(collectionName), userData)
      .then((docRef) => {
        this.userId = docRef.id;
      });
    let userDoc = this.getSingleUserRef(collectionName, this.userId);
    await updateDoc(userDoc, { id: this.userId });
  }

  ReadData(collectionName: any, array: object[]) {
    return onSnapshot(this.getUserRef(collectionName), (element) => {
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

  async deleteData(collectionName: any, docId: string) {
    let userDoc = this.getSingleUserRef(collectionName, docId);
    await deleteDoc(userDoc);
  }

  getUserRef(collectionName: any) {
    return collection(this.firestore, collectionName);
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

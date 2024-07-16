import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { Project } from '../../models/project.class';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  id: string = '';
  constructor() {
  }

  async addData(collectionName: any, Data: object) {
    await addDoc(this.getDataRef(collectionName), Data)
      .then((docRef) => {
        this.id = docRef.id;
      });
    let userDoc = this.getSingleDataRef(collectionName, this.id);
    await updateDoc(userDoc, { id: this.id });
  }

  ReadData(collectionName: any, array: object[]) {
    return onSnapshot(this.getDataRef(collectionName), (element) => {
      array.length = 0;
      element.forEach(obj => {
        array.push(obj.data());
      });
    });
  }

  async updateUser(user: User, docId: string) {
    let userDoc = this.getSingleDataRef("user", docId);
    await updateDoc(userDoc, user.toJSON());
  }

  async updateEvent(project: Project, docId: string) {
    let userDoc = this.getSingleDataRef("project", docId);
    await updateDoc(userDoc, project.projectToJSON());
  }

  async deleteData(collectionName: string, docId: string) {
    let userDoc = this.getSingleDataRef(collectionName, docId);
    await deleteDoc(userDoc);
  }

  getDataRef(collectionName: string) {
    return collection(this.firestore, collectionName);
  }

  getSingleDataRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase-service/firebase.service';
import { User } from '../../models/user.class';
import { onSnapshot } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dialog-restore-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterModule],
  templateUrl: './dialog-restore-user.component.html',
  styleUrl: './dialog-restore-user.component.scss'
})
export class DialogRestoreUserComponent implements OnInit {

  user: User = new User();
  userId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogRestoreUserComponent>, private service: FirebaseService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    return onSnapshot(this.service.getSingleDataRef("trash", this.userId), (element) => {
      this.user = new User(element.data());
    });
  }

  async restoreUser() {
    await this.service.addData("user", this.user.toJSON());
    await this.service.deleteData("trash", this.userId)
      .then(() => {
        this.dialogRef.close();
      });
  }
}

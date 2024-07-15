import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dialog-recycle-user',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, RouterModule],
  templateUrl: './dialog-recycle-user.component.html',
  styleUrl: './dialog-recycle-user.component.scss'
})
export class DialogRecycleUserComponent {
  user: User = new User();
  userId: string = '';


  constructor(public dialogRef: MatDialogRef<DialogRecycleUserComponent>, private service: FirebaseService) { }

  async deleteUser() {
    if (this.userId) {
      await this.service.addData("trash", this.user.toJSON())
        .then(() => {
          this.dialogRef.close();
        });
      await this.service.deleteData("user", this.userId);
    }
  }
}

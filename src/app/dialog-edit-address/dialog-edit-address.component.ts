import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../firebase-service/firebase.service';



@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, MatProgressBarModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})

export class DialogEditAddressComponent {

  loading = false;
  user: User = new User;
  userId: string = '';


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private service: FirebaseService) { }


  saveUser() {
    this.loading = true;
    this.service.updateUser(this.user, this.userId)
      .then(() => {
        this.closeDialog();
      });
  }

  closeDialog() {
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close();
    }, 1500);
  }

}

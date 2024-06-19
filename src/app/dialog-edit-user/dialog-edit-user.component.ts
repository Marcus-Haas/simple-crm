import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FirebaseService } from '../firebase-service/firebase.service';


@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatFormFieldModule, MatProgressBarModule, FormsModule, MatDialogModule, MatButtonModule, MatInputModule, MatDatepickerModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  loading = false;
  user: User = new User();
  userId: string = '';


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private service: FirebaseService) {

  }



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

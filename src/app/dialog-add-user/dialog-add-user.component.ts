import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})


export class DialogAddUserComponent {

  user = new User();
  birthDate = new Date();
  loading = false;

  constructor(private service: FirebaseService, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);
    await this.service.addUser(this.user.toJSON());
    this.closeDialog();
  }

  closeDialog() {
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close();
    }, 1500);
  }
}

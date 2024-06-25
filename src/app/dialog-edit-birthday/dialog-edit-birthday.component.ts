import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../firebase-service/firebase.service';

@Component({
  selector: 'app-dialog-edit-birthday',
  standalone: true,
  imports: [MatProgressBarModule, MatDialogModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './dialog-edit-birthday.component.html',
  styleUrl: './dialog-edit-birthday.component.scss'
})
export class DialogEditBirthdayComponent implements OnInit {

  loading = false;
  userId: string = '';
  user: User = new User();
  birthday: Date = new Date();

  constructor(public dialogRef: MatDialogRef<DialogEditBirthdayComponent>, private service: FirebaseService) {
  }

  ngOnInit(): void {
    this.birthday = new Date(this.user.birthDate)
  }

  saveBirthday() {
    this.loading = true;
    this.user.birthDate = this.birthday.getTime();
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

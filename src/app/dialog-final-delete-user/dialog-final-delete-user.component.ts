import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase-service/firebase.service';

@Component({
  selector: 'app-dialog-final-delete-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-final-delete-user.component.html',
  styleUrl: './dialog-final-delete-user.component.scss'
})
export class DialogFinalDeleteUserComponent {

  userId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogFinalDeleteUserComponent>, private service: FirebaseService) { }

  deleteForever() {
    this.service.deleteData("trash", this.userId);
    this.dialogRef.close();
  }
}

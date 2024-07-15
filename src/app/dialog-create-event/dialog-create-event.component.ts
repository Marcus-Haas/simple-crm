import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Project } from '../../models/project.class';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-create-event',
  standalone: true,
  imports: [MatProgressBarModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule,
    MatInputModule, FormsModule, MatButtonModule, MatSelectModule],
  templateUrl: './dialog-create-event.component.html',
  styleUrl: './dialog-create-event.component.scss'
})
export class DialogCreateEventComponent implements OnInit {

  loading = false;
  project = new Project();
  projectDate = new Date();
  allUsers: User[] = [];


  constructor(public dialogRef: MatDialogRef<DialogCreateEventComponent>, private service: FirebaseService) { }

  ngOnInit(): void {
    this.service.ReadData("user", this.allUsers);
    console.log(this.allUsers);
  }

  async saveProject() {
    this.loading = true;
    this.project.projectDate = this.projectDate.getTime();
    await this.service.addData("project", this.project.projectToJSON());
    this.closeDialog();
  }

  closeDialog() {
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close();
    }, 1500);
  }
}

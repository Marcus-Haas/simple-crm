import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FirebaseService } from '../firebase-service/firebase.service';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-projectdetails',
  standalone: true,
  imports: [MatProgressBarModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatSelectModule],
  templateUrl: './dialog-edit-projectdetails.component.html',
  styleUrl: './dialog-edit-projectdetails.component.scss'
})
export class DialogEditProjectdetailsComponent implements OnInit {

  loading = false;
  project: Project = new Project();
  projectId: string = '';
  allUsers: User[] = [];

  constructor(public dialogRef: MatDialogRef<DialogEditProjectdetailsComponent>, private service: FirebaseService) { }

  ngOnInit(): void {
    this.service.ReadData("user", this.allUsers);
  }

  saveProjectDetails() {
    this.loading = true;
    this.service.updateEvent(this.project, this.projectId)
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

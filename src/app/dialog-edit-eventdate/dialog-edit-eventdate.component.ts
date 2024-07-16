import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Project } from '../../models/project.class';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../firebase-service/firebase.service';

@Component({
  selector: 'app-dialog-edit-eventdate',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatProgressBarModule, MatDatepickerModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './dialog-edit-eventdate.component.html',
  styleUrl: './dialog-edit-eventdate.component.scss'
})
export class DialogEditEventdateComponent implements OnInit {

  loading = false;
  project: Project = new Project();
  projectId: string = '';
  eventDate: Date = new Date();

  constructor(public dialogRef: MatDialogRef<DialogEditEventdateComponent>, private service: FirebaseService) { }

  ngOnInit(): void {
    this.eventDate = new Date(this.project.projectDate);
  }

  saveDate() {
    this.loading = true;
    this.project.projectDate = this.eventDate.getTime();
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
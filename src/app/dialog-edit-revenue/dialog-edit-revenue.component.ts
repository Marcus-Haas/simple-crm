import { Component } from '@angular/core';
import { Project } from '../../models/project.class';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-revenue',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, MatProgressBarModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './dialog-edit-revenue.component.html',
  styleUrl: './dialog-edit-revenue.component.scss'
})
export class DialogEditRevenueComponent {

  loading = false;
  project: Project = new Project();
  projectId: string = '';


  constructor(public dialogRef: MatDialogRef<DialogEditRevenueComponent>, private service: FirebaseService) { }


  saveRevenue() {
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

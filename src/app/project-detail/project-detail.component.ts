import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.class';
import { FirebaseService } from '../firebase-service/firebase.service';
import { onSnapshot } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DialogEditEventdateComponent } from '../dialog-edit-eventdate/dialog-edit-eventdate.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditRevenueComponent } from '../dialog-edit-revenue/dialog-edit-revenue.component';
import { DialogEditProjectdetailsComponent } from '../dialog-edit-projectdetails/dialog-edit-projectdetails.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatMenuModule, CommonModule, MatButtonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {

  projectId: string = '';
  project: Project = new Project();


  constructor(private route: ActivatedRoute, private service: FirebaseService, public dialog: MatDialog) {
    this.getProjectId();
   }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectId() {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  getProjectDetails() {
    return onSnapshot(this.service.getSingleDataRef("project", this.projectId), (element) => {
      this.project = new Project(element.data());
    });
  }

  editEventDate() {
    const dialog = this.dialog.open(DialogEditEventdateComponent);
    dialog.componentInstance.project = new Project(this.project.projectToJSON());
    dialog.componentInstance.projectId = this.projectId;
  }

  editRevenue(){
    const dialog = this.dialog.open(DialogEditRevenueComponent);
    dialog.componentInstance.project = new Project(this.project.projectToJSON());
    dialog.componentInstance.projectId = this.projectId;
  }

  editProjectDetails(){
    const dialog = this.dialog.open(DialogEditProjectdetailsComponent);
    dialog.componentInstance.project = new Project(this.project.projectToJSON());
    dialog.componentInstance.projectId = this.projectId;
  }

}

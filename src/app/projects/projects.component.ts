import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogCreateEventComponent } from '../dialog-create-event/dialog-create-event.component';
import { Project } from '../../models/project.class';
import { FirebaseService } from '../firebase-service/firebase.service';
import { CommonModule } from '@angular/common';
import { MatSortModule, Sort } from '@angular/material/sort';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatTooltipModule, MatIconModule, MatButtonModule, CommonModule, MatSortModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  allProjects: Project[] = [];

  constructor(public dialog: MatDialog, private service: FirebaseService) { }

  ngOnInit(): void {
    this.service.ReadData("project", this.allProjects);
  }

  openEventDialog() {
    this.dialog.open(DialogCreateEventComponent);
  }

  sortData(sort: Sort) {
    const data = this.allProjects.slice();
    if (!sort.active || sort.direction === '') {
      this.allProjects = data;
      return;
    }
    this.allProjects = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'projectname':
          return this.compare(a.projectName, b.projectName, isAsc);
        case 'projectdate':
          return this.compare(a.projectDate, b.projectDate, isAsc);
        case 'status':
          return this.compare(a.status, b.status, isAsc);
        case 'projectmanager':
          return this.compare(a.manager, b.manager, isAsc);
        case 'revenue':
          return this.compare(a.revenue, b.revenue, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
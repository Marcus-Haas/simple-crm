import { Component } from '@angular/core';
import { Project } from '../../models/project.class';

@Component({
  selector: 'app-dialog-edit-revenue',
  standalone: true,
  imports: [],
  templateUrl: './dialog-edit-revenue.component.html',
  styleUrl: './dialog-edit-revenue.component.scss'
})
export class DialogEditRevenueComponent {

  loading = false;
  project: Project = new Project();
  projectId: string = '';

}

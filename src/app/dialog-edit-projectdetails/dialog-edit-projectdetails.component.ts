import { Component } from '@angular/core';
import { Project } from '../../models/project.class';

@Component({
  selector: 'app-dialog-edit-projectdetails',
  standalone: true,
  imports: [],
  templateUrl: './dialog-edit-projectdetails.component.html',
  styleUrl: './dialog-edit-projectdetails.component.scss'
})
export class DialogEditProjectdetailsComponent {

  loading = false;
  project: Project = new Project();
  projectId: string = '';
}

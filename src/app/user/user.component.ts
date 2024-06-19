import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../firebase-service/firebase.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon, MatButtonModule, MatTooltipModule, MatCardModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})



export class UserComponent implements OnInit {

  allUsers: any = [];

  constructor(public dialog: MatDialog, public service: FirebaseService) {
  }

  ngOnInit(): void {
    this.service.ReadData(this.allUsers);
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}

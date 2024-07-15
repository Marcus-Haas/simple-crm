import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../firebase-service/firebase.service';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user.class';
import { MatSortModule, Sort } from '@angular/material/sort';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon, MatButtonModule, MatTooltipModule, MatCardModule, RouterModule, MatSortModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})



export class UserComponent implements OnInit {

  allUsers: User[] = [];

  constructor(public dialog: MatDialog, public service: FirebaseService) {
  }

  ngOnInit(): void {
    this.service.ReadData("user", this.allUsers);
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  sortUserData(sort: Sort) {
    const data = this.allUsers.slice();
    if (!sort.active || sort.direction === '') {
      this.allUsers = data;
      return;
    }
    this.allUsers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'username':
          return this.compare(a.lastName, b.firstName, isAsc);
        case 'usermail':
          return this.compare(a.email, b.email, isAsc);
        case 'usercity':
          return this.compare(a.city, b.city, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

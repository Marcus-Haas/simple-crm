import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogRestoreUserComponent } from '../dialog-restore-user/dialog-restore-user.component';
import { DialogFinalDeleteUserComponent } from '../dialog-final-delete-user/dialog-final-delete-user.component';
import { User } from '../../models/user.class';
import { MatSortModule, Sort } from '@angular/material/sort';


@Component({
  selector: 'app-recycle-bin',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSortModule],
  templateUrl: './recycle-bin.component.html',
  styleUrl: './recycle-bin.component.scss'
})
export class RecycleBinComponent implements OnInit {

  allDeletedUsers: User[] = [];

  constructor(private service: FirebaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.ReadData("trash", this.allDeletedUsers);
  }

  openRestoreDialog(userId: string) {
    const dialog = this.dialog.open(DialogRestoreUserComponent);
    dialog.componentInstance.userId = userId;

  }

  openFinalDeleteDialog(userId: string) {
    const dialog = this.dialog.open(DialogFinalDeleteUserComponent);
    dialog.componentInstance.userId = userId;
  }

  sortDeleteData(sort: Sort) {
    const data = this.allDeletedUsers.slice();
    if (!sort.active || sort.direction === '') {
      this.allDeletedUsers = data;
      return;
    }
    this.allDeletedUsers = data.sort((a, b) => {
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

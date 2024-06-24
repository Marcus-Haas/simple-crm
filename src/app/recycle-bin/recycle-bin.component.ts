import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogRestoreUserComponent } from '../dialog-restore-user/dialog-restore-user.component';
import { DialogFinalDeleteUserComponent } from '../dialog-final-delete-user/dialog-final-delete-user.component';


@Component({
  selector: 'app-recycle-bin',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './recycle-bin.component.html',
  styleUrl: './recycle-bin.component.scss'
})
export class RecycleBinComponent implements OnInit {

  allDeletedUsers: any = [];

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
}

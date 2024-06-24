import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase-service/firebase.service';
import { onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditBirthdayComponent } from '../dialog-edit-birthday/dialog-edit-birthday.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogRecycleUserComponent } from '../dialog-recycle-user/dialog-recycle-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatButtonModule, MatMenuModule, CommonModule, MatTooltipModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  userId: string = '';
  user: User = new User;
  birthday: Date = new Date();


  constructor(private route: ActivatedRoute, private service: FirebaseService, public dialog: MatDialog,) {
    this.getUserId();
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserId() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  getUserDetails() {
    return onSnapshot(this.service.getSingleUserRef("user", this.userId), (element) => {
      this.user = new User(element.data());
      this.birthday = new Date(this.user.birthDate);
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;

  }

  editBirthday() {
    const dialog = this.dialog.open(DialogEditBirthdayComponent);
  }

  openRecycleDialog() {
    const dialog = this.dialog.open(DialogRecycleUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}

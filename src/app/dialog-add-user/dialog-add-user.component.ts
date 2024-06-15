import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})


export class DialogAddUserComponent {

  user = new User();
  birthDate = new Date();

  constructor() { }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);

  }
}

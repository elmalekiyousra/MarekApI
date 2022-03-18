import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;

    this.dialog.open(LoginComponent, dialogConfig);
  }
  register()
  {
    const dialogConf = new MatDialogConfig();
    dialogConf.disableClose=false;
    dialogConf.autoFocus=true;

    this.dialog.open(RegisterComponent, dialogConf);
  }
}

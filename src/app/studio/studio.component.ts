import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudioManageComponent } from '../studio-manage/studio-manage.component';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  detail()
  {
    const dialogConf = new MatDialogConfig();
    dialogConf.disableClose=false;
    dialogConf.autoFocus=true;

    this.dialog.open(StudioManageComponent, dialogConf);
  }
}

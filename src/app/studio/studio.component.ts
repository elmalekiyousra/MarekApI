import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudioService } from '../services/Studio/studio.service';
import { StudioManageComponent } from '../studio-manage/studio-manage.component';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  studio:any;
  studios=[];

  constructor(public dialog: MatDialog, private studioservice: StudioService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('sid'));
    this.getStudioById(localStorage.getItem('sid'))

  }

  detail()
  {
    const dialogConf = new MatDialogConfig();
    dialogConf.disableClose=false;
    dialogConf.autoFocus=true;

    this.dialog.open(StudioManageComponent, dialogConf);
  }

  delete(studio)
  {
   if(!confirm('are you sure you want to delete this ?')) return
     this.studioservice.delete(studio).subscribe();
     window.location.reload();
  }

  save(studios)
  {
   this.studioservice.create(studios).subscribe(
     data=> console.log(data)
   );
   window.location.reload();

  }

  getStudioById(id)
  {
      this.studioservice.getStudioByID(id).subscribe(data=>this.studio=data);
  }


 
}

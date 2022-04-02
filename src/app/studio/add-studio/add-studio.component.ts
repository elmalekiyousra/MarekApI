import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudioService } from 'src/app/services/Studio/studio.service';

@Component({
  selector: 'app-add-studio',
  templateUrl: './add-studio.component.html',
  styleUrls: ['./add-studio.component.css']
})
export class AddStudioComponent implements OnInit {

  form = new FormGroup({
    Name: new FormControl('', Validators.required),
    Description : new FormControl('', Validators.required),
    condition : new FormControl(),
    Equipement : new FormControl(),
    Users : new FormControl(),
    PriceHour : new FormControl('', Validators.required),

  });

  save(studios)
  {
   this.studioservice.create(studios).subscribe(
     data=> console.log(data)
   );
   window.location.reload();

  }
 
  constructor(private studioservice: StudioService) { }

  ngOnInit(): void {
  }

}

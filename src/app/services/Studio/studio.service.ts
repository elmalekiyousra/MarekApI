import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor(private http: HttpClient) { }

  create(studio){
    return this.http.get('', studio);
  }
  delete(id){
    return this.http.delete(''+id);
  }
  edit(id, Name, Description, condition, Equipement, PriceHour, UserId){
    return this.http.put(' '+id, {
      Name:Name,
      Description:Description,
      condition:condition,
      Equipement:Equipement,
      PriceHour:PriceHour,
      UserId: UserId,
    })
  }

  getStudioByID(id){
    return this.http.get(''+id);
  }
  getALL(){
    return this.http.get('');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

logout(User){ return this.http.post('', User)}
login(){}
Edit(){}
Delete(id){}
create(user){return this.http.post('', user)}
getUserById(id){return this.http.get(''+id);}

getUserBystudio(studioId){return this.http.get(''+studioId);}


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponceModel } from '../models/userResponceModel';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  users:User[]=[];
 apiUrl='http://localhost:3000/user/';

  constructor(private httpClient:HttpClient) { }


 
getUsers():Observable<UserResponceModel>{
return  this.httpClient.get<UserResponceModel>(this.apiUrl);}

}

import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers :[HttpClient],
})
export class UserComponent implements OnInit {
 
 users:User[]=[];
  @Output() userSelected = new EventEmitter<number>();  
 apiUrl='http://localhost:3000/user/';

 constructor(private userService:UserService) {}

 async ngOnInit() {
   this.getUsers();
 }


getUsers(){
  this.userService.getUsers().subscribe(responce=>{
    this.users = responce.data;
  });
}
  onUserClick(userId:number){
   this.userSelected.emit(userId); 
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users:any;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(){
    this.userService.getAllUsers().subscribe(
      (data)=>{
        console.log(data.message);
        console.log(data.users);
        this.users = data.users;
      }
    )
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log('User',data.message);
        this.userService.getAllUsers().subscribe(
          (data)=>{
            console.log(data.message);
            console.log(data.users);
            this.users = data.users;
          }
        )
        
      }
    )
  }

  displayUser(id:any){
    this.router.navigate([`display-user/${id}`])
  }

  editUser(id:any){
    this.router.navigate([`edit-user/${id}`])

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:any={};
  error:string;
  constructor( private fb:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    });
  }

  login(){
    alert('btn clicked');
    console.log('here is my object',this.user);

    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        if (data.message=='Email and password correct!') {
          this.router.navigate([''])
        }  
        else{
          this.error='Invalid mail or password!'
        }      
      }
    )
  }

}

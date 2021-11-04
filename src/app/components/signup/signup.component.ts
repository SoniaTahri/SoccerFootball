import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../../validators/confirm-password';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id:any;
  title:any;
  signupForm:FormGroup;
  user:any={};
  constructor( private fb:FormBuilder, private userService:UserService , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.signupForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
    },
    {validator:MustMatch('password','confirmPassword')}
    )
    if (this.id) {
      //edit
      this.title= 'edit user';
      this.userService.getUserById(this.id).subscribe(
        (data)=>{
          console.log(data.FindedUser);
          this.user= data.FindedUser;
        }
      )
    }else{
      //add
      this.title = 'signup';
    }
  }
  
  
  signUp(u:any){
   alert('btn clicked')
   console.log(this.signupForm.value)

   if (this.id) {
    //edit
    this.userService.editUser(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
  }
  else{
    //add
    this.userService.signup(u).subscribe(
      (data)=>{
        console.log('data add user',data.message);
        
      }
    )
  }

  }
}

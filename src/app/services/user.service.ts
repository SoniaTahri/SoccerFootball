import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<{users:any, message:string}>(this.userURL+'/users');
  }

  getUserById(id:any){
    return this.httpClient.get<{FindedUser:any}>(`${this.userURL+'/users'}/${id}`);
  }

  signup(user:any){
    console.log(user);
    return this.httpClient.post<{message:string}>(this.userURL+'/users', user);
  }

  editUser(user:any){
    return this.httpClient.put<{message:string}>(`${this.userURL+'/users'}/${user._id}`,user);
  }

  deleteUser(id:any){
    return this.httpClient.delete<{message:string}>(`${this.userURL+'/users'}/${id}`);
  }

  login(user:any){
    return this.httpClient.post<{message:string, user:any}>(this.userURL+'/login', user)
  }

}
    
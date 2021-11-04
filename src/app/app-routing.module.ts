import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddStaduimComponent } from './components/add-staduim/add-staduim.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { ResultsComponent } from './components/results/results.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'addPlayer',component:AddPlayerComponent},
  {path:'addMatch',component:AddMatchComponent},
  {path:'addTeam',component:AddTeamComponent},
  {path:'addStaduim',component:AddStaduimComponent},
  {path:'dashboardadmin',component:DashboardAdminComponent},
  {path:'display-user/:id',component:DisplayUserComponent},
  {path:'display-player/:id',component:DisplayPlayerComponent},
  {path:'display-match/:id',component:DisplayMatchComponent},
  {path:'display-team/:id',component:DisplayTeamComponent},
  {path:'edit-player/:id',component:AddPlayerComponent},
  {path:'edit-match/:id',component:AddMatchComponent},
  {path:'edit-stadium/:id',component:AddStaduimComponent},
  {path:'edit-user/:id',component:SignupComponent},
  {path:'news',component:NewsComponent},
  {path:'results',component:ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddStaduimComponent } from './components/add-staduim/add-staduim.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminStadiumsComponent } from './components/admin-stadiums/admin-stadiums.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { MatchComponent } from './components/match/match.component';
import { StadeComponent } from './components/stade/stade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent,
    ResultsComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogsComponent,
    SignupComponent,
    LoginComponent,
    AddMatchComponent,
    AddStaduimComponent,
    AddPlayerComponent,
    DashboardAdminComponent,
    AsterixPipe,
    AdminMatchesComponent,
    AdminPlayersComponent,
    AdminUsersComponent,
    AdminStadiumsComponent,
    AddTeamComponent,
    AdminTeamsComponent,
    DisplayUserComponent,
    DisplayPlayerComponent,
    DisplayMatchComponent,
    DisplayTeamComponent,
    PlayersComponent,
    PlayerComponent,
    MatchComponent,
    StadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

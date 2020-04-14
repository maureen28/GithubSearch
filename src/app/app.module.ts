import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePassedPipe } from './date-passed.pipe';
import { GitTextDecoDirective } from './git-text-deco.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RepoComponent } from './components/repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePassedPipe,
    GitTextDecoDirective,
    NotFoundComponent,
    ProfileComponent,
    UsersComponent,
    NavbarComponent,
    RepoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  // {path: 'repo' , component: },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

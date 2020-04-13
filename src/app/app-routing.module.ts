import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { UserComponent } from './components/user/user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'profile-details', component: ProfileDetailsComponent},
  {path: 'user', component: UserComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

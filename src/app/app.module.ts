import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatePassedPipe } from './date-passed.pipe';
import { GitTextDecoDirective } from './git-text-deco.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatePassedPipe,
    GitTextDecoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

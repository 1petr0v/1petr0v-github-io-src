import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: IntroComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

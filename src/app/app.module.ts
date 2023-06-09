import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './homeBody/home-body.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { Homepage2Component } from './homepage2/homepage2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBodyComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent,
    Homepage2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ {
      path : 'about',
      component : AboutComponent,
    },
    {
      path : 'contact',
      component : ContactComponent,
    },
    {
      path : 'team',
      component : TeamComponent,
    },
    {
      path : 'homepage2',
      component : Homepage2Component,
    },
    {
      path : 'home',
      component : HomeBodyComponent,
    },
    {
      path : '', redirectTo : '/home', pathMatch : 'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AuthService } from './_services/auth.service';
import { DataService } from './_services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './_services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

import { LolstatsComponent } from './lolstats/lolstats.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactMeComponent,
    LolstatsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        throwNoTokenError: true,
        whitelistedDomains: ['localhost:3000']
      }
    })
    
  ],
  providers: [DataService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

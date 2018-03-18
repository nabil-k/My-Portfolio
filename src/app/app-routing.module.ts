import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';


import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LolstatsComponent } from './lolstats/lolstats.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'contactMe', component: ContactMeComponent },
  {path:'LoL-Stats', component: LolstatsComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo:'home', pathMatch:'full' },
  {path:'admin/login', component: AdminLoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

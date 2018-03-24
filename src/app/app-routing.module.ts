import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';


import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LolstatsComponent } from './lolstats/lolstats.component';
import { BlogComponent } from './blog/blog.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: 'LoL-Stats', component: LolstatsComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'blog', component: AdminBlogComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { ContactMeComponent } from './contact-me/contact-me.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: '', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LegosComponent } from './pages/legos/legos.component';
import { MircoComponent } from './pages/mirco/mirco.component';
import { VideoComponent } from './pages/video/video.component';
import { EspaceComponent } from './pages/espace/espace.component';
import { VisitTrackingGuard } from './visit-tracking.guard';

export const routes: Routes = [
  { path: '',
    canActivate: [VisitTrackingGuard],
    component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  {path:'legos',component:LegosComponent},
  {path:'mirco',component:MircoComponent},
  {path:'video',component:VideoComponent},
  {path:'espace',component:EspaceComponent},
  { path: '**', redirectTo: '' } // Redirection vers home si la route n'existe pas
];
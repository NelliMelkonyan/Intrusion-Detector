import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CamerasComponent } from './cameras/cameras.component';
import { LoginComponent } from './login/login.component';
import { DetectedObjectsComponent } from './detected-objects/detected-objects.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cameras', component: CamerasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'detected-objects', component: DetectedObjectsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

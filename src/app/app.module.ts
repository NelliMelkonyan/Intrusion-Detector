import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetectedObjectsComponent } from './detected-objects/detected-objects.component';
import { routes } from './app.router';
import { CamerasComponent } from './cameras/cameras.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetectedObjectsComponent,
    CamerasComponent,
    LoginComponent
  ],
  imports: [
  BrowserModule,
  routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

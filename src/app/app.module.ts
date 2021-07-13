import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import {RequestComponent} from './request/request.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilitiesComponent,
    SpecialitiesComponent,
    GalleryComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'facilities', component: FacilitiesComponent},
      {path: 'divisions',component:SpecialitiesComponent},
      {path:'request',component:RequestComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'contactUs',component:ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

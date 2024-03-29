import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  faCoffee,
  faBacon,
  faPlus,
  faHospital,
  faAmbulance,
  faAngleDoubleDown,
  faSync
 } from '@fortawesome/free-solid-svg-icons';
import { BtnLoadingComponent } from './components/btn-loading/btn-loading.component';
import { FormsExpComponent } from './components/forms-exp/forms-exp.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AngularLifecycleHooksComponent } from './components/angular-lifecycle-hooks/angular-lifecycle-hooks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NavbarComponent,
    ProfileComponent,
    BtnLoadingComponent,
    FormsExpComponent,
    AddDoctorComponent,
    AngularLifecycleHooksComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DoctorDetailsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIcons(faBacon);
    library.addIcons(faPlus);
    library.addIcons(faHospital);
    library.addIcons(faAmbulance);
    library.addIcons(faAngleDoubleDown);
    library.addIcons(faSync);
  }
}

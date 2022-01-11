import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './forms/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegistrationComponent } from './forms/registration/registration.component';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import { DetaljiComponent } from './detalji/detalji.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {ToastrModule} from "ngx-toastr";
import { KomentarComponent } from './komentar/komentar.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from '@angular/material/input';

const routes:Routes=[

  { path:'', component: HomeComponent},
  { path:'detalji', component: DetaljiComponent},
  { path:'prijava', component: LoginComponent},
  { path:'registracija', component: RegistrationComponent},



];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    DetaljiComponent,
    KomentarComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxPaginationModule,
    FormsModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatInputModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

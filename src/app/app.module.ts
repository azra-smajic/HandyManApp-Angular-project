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
import { OglasComponent } from './oglas/oglas.component';
import {MatStepperModule} from "@angular/material/stepper";
import { AngazmanComponent } from './angazman/angazman.component';
import {MatButtonModule} from "@angular/material/button";
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MojioglasiComponent } from './mojioglasi/mojioglasi.component';
import { OglasDetaljiComponent } from './forms/oglas-detalji/oglas-detalji.component';
import { ConfirmationDialogComponent } from './forms/confirmation-dialog/confirmation-dialog.component';
import { AngazmaniComponent } from './forms/angazmani/angazmani/angazmani.component';
import { NoviangazmaniComponent } from './forms/angazmani/noviangazmani/noviangazmani.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { AddPonudaComponent } from './add-ponuda/add-ponuda.component';
import { MojePonudeComponent } from './moje-ponude/moje-ponude.component';


const routes:Routes=[

  { path:'', component: HomeComponent},
  { path:'detalji', component: DetaljiComponent},
  { path:'prijava', component: LoginComponent},
  { path:'registracija', component: RegistrationComponent},
  { path:'noviangazmani', component: NoviangazmaniComponent},
  { path:'prihvaceniangazmani', component: AngazmaniComponent},
  { path:'angazman', component: AngazmanComponent},
  { path:'dodajOglas', component: OglasComponent},
  { path:'mojiOglasi', component: MojioglasiComponent},
  { path:'addPonuda', component: AddPonudaComponent},
  { path:'mojePonude', component: MojePonudeComponent},



];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    DetaljiComponent,
    KomentarComponent,
    OglasComponent,
    AngazmanComponent,
    MojioglasiComponent,
    OglasDetaljiComponent,
    ConfirmationDialogComponent,
    AngazmaniComponent,
    NoviangazmaniComponent,
    AddPonudaComponent,
    MojePonudeComponent,



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
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    FileUploadModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule


  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

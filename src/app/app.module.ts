import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import { DetaljiComponent } from './detalji/detalji.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {ToastrModule} from "ngx-toastr";
import { KomentarComponent } from './komentar/komentar.component';
import {MatDialogModule} from "@angular/material/dialog";

const routes:Routes=[

  { path:'', component: HomeComponent},
  { path:'detalji', component: DetaljiComponent},



];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetaljiComponent,
    KomentarComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    FormsModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

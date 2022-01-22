import {Component, OnInit, ViewChild} from '@angular/core';
import { Korisnik } from './data/classes';
import { InfoService } from './data/logger-info/info.service';
import {MatDialog} from "@angular/material/dialog";
import {ONamaComponent} from "./o-nama/o-nama.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HandyManApp';
  @ViewChild('pretraga') dugme3: any;
  @ViewChild('dodajOglas') dugme4: any;
  @ViewChild('evidencija') dugme5: any;
  @ViewChild('mojiOglasi') dugme6: any;
  @ViewChild('pocetna') dugme0: any;
  @ViewChild('pomoc') dugme1: any;
  @ViewChild('about') dugme2: any;
  @ViewChild('addPonuda') dugme7: any;
  @ViewChild('MyPonuda') dugme8: any;
  constructor(public dialog: MatDialog) {
  }
  openAbout() {
    const dialogRef = this.dialog.open(ONamaComponent,{
      height:"550px",
      panelClass: 'custom-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });}

  GetUser=()=> InfoService?.LogiraniKorisnik;
  GetUloga=()=>InfoService?.LogiraniKorisnik?.Uloga;

  OdjaviSe=()=> InfoService.LogiraniKorisnik=null;
  ngAfterViewInit() {

    this.dugme3.nativeElement.style.color="darkblue";
  }
  clickPretraga(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(123,123,123,0.41)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="darkblue";

    if(this.dugme4)
      this.dugme4.nativeElement.style.color="white";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="white";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="white";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="white";
    if(this.dugme8)
      this.dugme8.nativeElement.style.color="white";
  }
  clickOglas(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";

    if(this.dugme4)
      this.dugme4.nativeElement.style.color="darkblue";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="white";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="white";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="white";
    if(this.dugme8)
      this.dugme8.nativeElement.style.color="white";

  }
  clickEvidencija(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";
    if(this.dugme4)
      this.dugme4.nativeElement.style.color="white";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="darkblue";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="white";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="white";
    if(this.dugme8)
      this.dugme8.nativeElement.style.color="white";
  }
  ClickPomoc(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(123,123,123,0.41)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";
    if(this.dugme4)
      this.dugme4.nativeElement.style.color="white";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="white";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="white";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="white";
    if(this.dugme8)
    this.dugme8.nativeElement.style.color="white";
  }
  ClickHome(){

  }
  clickAbout(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";
    this.dugme4.nativeElement.style.color="white";
    this.dugme5.nativeElement.style.color="white";
    this.dugme6.nativeElement.style.color="white";
    this.dugme7.nativeElement.style.color="white";
    this.dugme8.nativeElement.style.color="white";
  }
  clickMojiOglasi(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";
    if(this.dugme4)
      this.dugme4.nativeElement.style.color="white";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="white";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="darkblue";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="white";
    if(this.dugme8)
      this.dugme8.nativeElement.style.color="white";
  }
  clickAddPonuda(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";

    if(this.dugme4)
      this.dugme4.nativeElement.style.color="white";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="white";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="white";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="darkblue";
    if(this.dugme8)
      this.dugme8.nativeElement.style.color="white";

  }
  clickMojePonude(){
    this.dugme0.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor="rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color="white";

    if(this.dugme4)
      this.dugme4.nativeElement.style.color="white";
    if(this.dugme5)
      this.dugme5.nativeElement.style.color="white";
    if(this.dugme6)
      this.dugme6.nativeElement.style.color="white";
    if(this.dugme7)
      this.dugme7.nativeElement.style.color="white";
    if(this.dugme8)
      this.dugme8.nativeElement.style.color="darkblue";
  }
  Pocetna(){


    this.clickPretraga();

  }
  ClickDodajPonudu(){

  }
  ngOnInit(): void {
  }
}

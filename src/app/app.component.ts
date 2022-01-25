import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik, NavNotification } from './data/classes';
import { InfoService } from './data/logger-info/info.service';
import { MatDialog } from "@angular/material/dialog";
import { ONamaComponent } from "./o-nama/o-nama.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HandyManApp';
  @ViewChild('pocetna') dugme0: any;
  @ViewChild('pomoc') dugme1: any;
  @ViewChild('about') dugme2: any;
  @ViewChild('pretraga') dugme3: any;
  @ViewChild('oglasi') dugme4: any;
  @ViewChild('evidencija') dugme5: any;
  @ViewChild('mojiOglasi') dugme6: any;
  @ViewChild('nadjiPosao') dugme7: any;
  @ViewChild('addPonuda') dugme8: any;
  @ViewChild('MyPonuda') dugme9: any;
  constructor(public dialog: MatDialog, private router: Router) {  }
  openAbout() {
    const dialogRef = this.dialog.open(ONamaComponent, {
      height: "550px",
      panelClass: 'custom-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  GetUser = () => InfoService?.LogiraniKorisnik;
  GetUloga = () => InfoService?.LogiraniKorisnik?.Uloga;


  RouterNoviAngazmani() {
    this.router.navigateByUrl("/noviangazmani");
    NavNotification.AngazmaniNotification = false;
  }

  ngAfterViewInit() {

    this.dugme3.nativeElement.style.color = "darkblue";
  }

  clickPretraga() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(123,123,123,0.41)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "darkblue";
    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";
    if (this.dugme9)
      this.dugme9.nativeElement.style.color = "white";
  }
  clickOglas() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";
    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "darkblue";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";

  }
  clickEvidencija() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";
    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "darkblue";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";
  }
  ClickPomoc() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(123,123,123,0.41)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";
    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";
  }
  ClickHome() {

  }
  clickAbout() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";
    this.dugme4.nativeElement.style.color = "white";
    this.dugme5.nativeElement.style.color = "white";
    this.dugme6.nativeElement.style.color = "white";
    this.dugme7.nativeElement.style.color = "white";
    this.dugme8.nativeElement.style.color = "white";
  }
  clickMojiOglasi() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";
    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "darkblue";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";
  }
  clickAddPonuda() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";

    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "darkblue";
      if (this.dugme9)
      this.dugme9.nativeElement.style.color = "white";

      this.router.navigateByUrl("objavi-kvar");

  }
  clickMojePonude() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";

    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "white";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";
      if (this.dugme9)
      this.dugme9.nativeElement.style.color = "darkblue";
    this.RouterLink();
  }

  clickNadjiPosao() {
    this.dugme0.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme1.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme2.nativeElement.style.backgroundColor = "rgba(255,255,255,0)";
    this.dugme3.nativeElement.style.color = "white";
    if (this.dugme4)
      this.dugme4.nativeElement.style.color = "white";
    if (this.dugme5)
      this.dugme5.nativeElement.style.color = "white";
    if (this.dugme6)
      this.dugme6.nativeElement.style.color = "white";
    if (this.dugme7)
      this.dugme7.nativeElement.style.color = "darkblue";
    if (this.dugme8)
      this.dugme8.nativeElement.style.color = "white";
  }
  Pocetna() {


    this.clickPretraga();

  }
  ClickDodajPonudu() {

  }

  RouterLink() {
    NavNotification.PonudeNotification = false;
    this.router.navigateByUrl("/moji-kvarovi");
  }

  RoutePoslanePonude() {
    this.router.navigateByUrl("/poslane-ponude");
  }

  GetPonudeNotification() {
    return NavNotification.PonudeNotification;
  }

  GetAngazmanNotification() {
    return NavNotification.AngazmaniNotification && this.GetUloga() == "Majstor";
  }

  TrenutnoNotifikacija() {
    return NavNotification.TrenutnoNotifikacija;
  }

  toggleBadgeVisibility() {
    return !NavNotification.Hidden || !(this.GetUloga() == 'Potražitelj usluga' && this.TajibVikaloPrihvatioPonudu()
      || this.GetUloga() == 'Majstor' && this.AzraSmajicPoslalaPonudu()
      || this.GetUloga() == 'Majstor' && this.AzraSmajicOdbilaPonudu()
      || this.GetUloga() == 'Potražitelj usluga' && this.TajibVikaloPoslaoPonudu()
      || this.GetUloga() == 'Potražitelj usluga' && this.TajibVikaloOdbioPonudu())
  }

  OdjaviSe() {
    InfoService.LogiraniKorisnik = null;
    NavNotification.Hidden = true;
    this.router.navigateByUrl("");
  }

  Sakrij() {
    NavNotification.Hidden = false;
  }

  PonistiNotifikacije() {
    NavNotification.TrenutnoNotifikacija = 0;
  }

  AzraSmajicPrihvatilaPonudu = () => NavNotification.AzraSmajicPrihvatilaPonudu;
  AzraSmajicOdbilaPonudu = () => NavNotification.AzraSmajicOdbilaPonudu;
  AzraSmajicPoslalaPonudu = () => NavNotification.AzraSmajicPoslalaPonudu;


  TajibVikaloPrihvatioPonudu = () => NavNotification.TajibVikaloPrihvatioPonudu;
  TajibVikaloOdbioPonudu = () => NavNotification.TajibVikaloOdbioPonudu;
  TajibVikaloPoslaoPonudu = () => NavNotification.TajibVikaloPoslaoPonudu;


  


  ngOnInit(): void {
  }
}

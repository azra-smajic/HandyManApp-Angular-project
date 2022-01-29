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
  @ViewChild('pocetna') btnPocetna: any;
  @ViewChild('pomoc') btnPomoc: any;
  @ViewChild('about') btnAbout: any;
  //@ViewChild('pretraga') btnPretraga: any;
  @ViewChild('oglasi') btnOglasi: any;
  @ViewChild('evidencija') btnEvidencija: any;
  @ViewChild('mojiOglasi') btnMojiOglasi: any;
  //@ViewChild('nadjiPosao') btnNadjiPosao: any;
  @ViewChild('addPonuda') btnAddKvar: any;
  @ViewChild('MyPonuda') btnMojiKvarovi: any;

  constructor(public dialog: MatDialog, private router: Router) {
  }
  openAbout() {
    const dialogRef = this.dialog.open(ONamaComponent, {
      height: "550px",
      panelClass: 'custom-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log(this.BtnArray)
  }

  GetUser = () => InfoService?.LogiraniKorisnik;
  GetUloga = () => InfoService?.LogiraniKorisnik?.Uloga;


  BtnArray: Array<any> = new Array<any>();
  BtnTriNav: Array<any> = new Array<any>();
  RouterNoviAngazmani() {
    this.router.navigateByUrl("/noviangazmani");
    NavNotification.AngazmaniNotification = false;
  }

  ngAfterViewInit() {

    this.btnPocetna.nativeElement.style.backgroundColor = "#00000029";


  }

  UcitajBtns() {
    this.BtnArray = [];
    this.BtnTriNav = [];

    this.BtnTriNav.push(this.btnAbout);
    this.BtnTriNav.push(this.btnPocetna);
    this.BtnTriNav.push(this.btnPomoc);

    this.BtnArray.push(this.btnOglasi);
    this.BtnArray.push(this.btnEvidencija);
    this.BtnArray.push(this.btnMojiOglasi);
    this.BtnArray.push(this.btnAddKvar);
    this.BtnArray.push(this.btnMojiKvarovi);
  }

  PromijeniBoje() {
    this.BtnTriNav.forEach(x => {
      x.nativeElement.style.backgroundColor = "rgb(0 0 0 / 0%)";
    })

    this.BtnArray.forEach(x => {
      if (x != null) {
        x.nativeElement.style.color = "white";
      }
    })
  }

  clickOglas() {
    this.UcitajBtns();

    this.PromijeniBoje();

    this.btnOglasi.nativeElement.style.color = "darkblue";
  }
  clickEvidencija() {
    this.UcitajBtns();
    this.PromijeniBoje();
    this.btnEvidencija.nativeElement.style.color = "darkblue";
  }
  ClickPomoc() {
    this.UcitajBtns();
    this.PromijeniBoje();
    this.btnPomoc.nativeElement.style.backgroundColor = "#00000029";
    this.btnPomoc.nativeElement.style.color = "darkblue";
  }

  clickMojiOglasi() {
    this.UcitajBtns();
    this.PromijeniBoje();
    this.btnMojiOglasi.nativeElement.style.color = "darkblue";
  }
  clickAddPonuda() {
    this.UcitajBtns();
    this.PromijeniBoje();
    this.btnAddKvar.nativeElement.style.color = 'darkblue';

    this.router.navigateByUrl("objavi-kvar");

  }
  clickMojePonude() {
    this.UcitajBtns();


    this.PromijeniBoje();


    this.btnMojiKvarovi.nativeElement.style.color = "darkblue";
    this.RouterLink();
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



  Route() {
    if (this.GetUloga() == "Majstor")
      this.router.navigateByUrl("majstor-oglasi")
    else
      this.router.navigateByUrl("")

      this.UcitajBtns();

      this.PromijeniBoje();
  
      this.btnPocetna.nativeElement.style.backgroundColor = "#00000029";

      console.log(this.btnPocetna.nativeElement)
  }



  ngOnInit(): void {
  }
}

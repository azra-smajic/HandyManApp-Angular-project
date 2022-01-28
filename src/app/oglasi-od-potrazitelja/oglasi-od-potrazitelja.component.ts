import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PotraziteljOglas } from '../data/classes';
import { Korisnici, PotraziteljOglasi } from '../data/database/podaci';
import { DetaljiOglasaComponent } from './detalji-oglasa/detalji-oglasa.component';
import { SlanjePonudeComponent } from './slanje-ponude/slanje-ponude.component';

@Component({
  selector: 'app-oglasi-od-potrazitelja',
  templateUrl: './oglasi-od-potrazitelja.component.html',
  styleUrls: ['./oglasi-od-potrazitelja.component.css']
})
export class OglasiOdPotraziteljaComponent implements OnInit {

  p: number = 1;
  oglasi: PotraziteljOglas[] = [];
  oglasiCijeli: any = [];
  pageOfItems: any;
  @ViewChild('dugme1') dugme1: any;
  @ViewChild('dugme2') dugme2: any;
  @ViewChild('dugme3') dugme3: any;
  @ViewChild('dugme4') dugme4: any;
  @ViewChild('dugme5') dugme5: any;
  @ViewChild('elementRef') elementRef: any;
  constructor(public router: Router, private toastr: ToastrService, private dialog: MatDialog) {
    this.oglasi = PotraziteljOglasi;
    this.oglasiCijeli = this.oglasi;
  }
  ngOnInit(): void { }
  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
    this.dugme1.nativeElement.style.background="#000066";
  }


  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  ClickElektrika(){

    this.dugme2.nativeElement.style.background="#000066";
    this.dugme1.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme3.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme4.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme5.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Elektrika");
    this.oglasi=niz;

  }
  ClickSve(){

    this.dugme1.nativeElement.style.background="#000066";
    this.dugme2.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme3.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme4.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme5.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.oglasi=this.oglasiCijeli;

  }
  ClickKeramika(){

    this.dugme3.nativeElement.style.background="#000066";
    this.dugme1.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme2.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme4.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme5.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Keramika");
    this.oglasi=niz;
  }
  ClickCiscenje(){

    this.dugme4.nativeElement.style.background="#000066";
    this.dugme1.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme3.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme2.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme5.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Čiščenje");
    this.oglasi=niz;

  }
  ClickCijevi(){

    this.dugme5.nativeElement.style.background="#000066";
    this.dugme1.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme3.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme4.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.dugme2.nativeElement.style.background="rgba(21,57,194,0.85)";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Cijevne instalacije");
    this.oglasi=niz;

  }
  Detalji(id: number) {
    this.dialog.open(DetaljiOglasaComponent, {
      width: "700px",
      data: this.oglasi.filter(x => x.ID == id)[0]
    });
  }

  SlanjePonude(id: number) {
    this.dialog.open(SlanjePonudeComponent, {
      width: "700px",
      data: { korisnik: Korisnici[0], oglas: this.oglasi.filter(x => x.ID == id)[0] }
    });
  }

  pretraga: string = "";

  Pretraga() {
    if (this.pretraga == "") {
      this.oglasi = PotraziteljOglasi;
      return;
    }

    this.oglasi = PotraziteljOglasi.filter(x => x.Naziv.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Naziv.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Adresa.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Grad.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Oblast.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Opis.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Podrucje.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.Potrazitelj.toLowerCase().includes(this.pretraga.toLowerCase())
      || x.BrojTelefona.toLowerCase().includes(this.pretraga.toLowerCase()))
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.Pretraga();
    }
  }
}

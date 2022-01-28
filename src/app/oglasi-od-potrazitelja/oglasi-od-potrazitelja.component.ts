import { Component, OnInit } from '@angular/core';
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
  constructor(public router: Router, private toastr: ToastrService, private dialog: MatDialog) {
    this.oglasi = PotraziteljOglasi;
    this.oglasiCijeli = this.oglasi;
  }
  ngOnInit(): void { }
  ngAfterViewInit() { }

  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
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

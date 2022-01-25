import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Angazmani } from 'src/app/data/database/podaci';
import { OglasDetaljiComponent } from '../../oglas-detalji/oglas-detalji.component';

@Component({
  selector: 'app-angazmani',
  templateUrl: './angazmani.component.html',
  styleUrls: ['./angazmani.component.css']
})
export class AngazmaniComponent implements AfterViewInit {
  displayedColumnsPrihvaceni: string[] = ['Naziv', 'Datum', 'Vrijeme', 'KratakOpis','Akcije'];
  dsPrihvaceniANgazmani = new MatTableDataSource<any>(Angazmani.filter(x=>x.Prihvacen).reverse());

  pretraga: string = "";
  rezultatPretrage: boolean = false;
  filterPodaci: any[] = [];

  @ViewChild(MatPaginator, { static: true }) pagPrihvaceniAngazmani!: MatPaginator;

  constructor(private router:Router, public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dsPrihvaceniANgazmani.paginator=this.pagPrihvaceniAngazmani;
  }

  ngOnInit(){
    this.pagPrihvaceniAngazmani._intl.itemsPerPageLabel="Pregled angažmana po stranici: ";
    this.pagPrihvaceniAngazmani._intl.nextPageLabel=="Sljedeća stranica";
    this.pagPrihvaceniAngazmani._intl.firstPageLabel ="Vrati se na prvu stranicu";
    this.pagPrihvaceniAngazmani._intl.lastPageLabel="Idi na zadnju stranicu";
    this.pagPrihvaceniAngazmani._intl.previousPageLabel="Prethodna stranica";
  }

  Pretraga() {
    this.rezultatPretrage = true;
    if (this.pretraga == "") {
      this.filterPodaci = Angazmani.filter(x => x.Prihvacen && !x.Obrisan);
      this.UcitajAngazmane(this.filterPodaci);
      return;
    }

    var niz = Angazmani.filter((x: any) => x.Prihvacen && !x.Obrisan && (x.Naziv.includes(this.pretraga)
      || x.Adresa.includes(this.pretraga) || x.Opis.includes(this.pretraga)
      || x.Vrijeme.includes(this.pretraga) || x.Datum.includes(this.pretraga) || x.KontaktTelefon.includes(this.pretraga) || x.ImePotrazitelja.includes(this.pretraga)));
    this.UcitajAngazmane(niz);
  }
  
  UcitajAngazmane(podaci: any = null) {
    this.dsPrihvaceniANgazmani = new MatTableDataSource<any>(podaci ?? Angazmani.filter(x=>x.Prihvacen).reverse());
    this.dsPrihvaceniANgazmani.paginator = this.pagPrihvaceniAngazmani;
  }


  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.Pretraga();
    }
  }

  Detalji(id:number){
    this.dialog.open(OglasDetaljiComponent,{
      data: Angazmani.filter(x=>x.ID==id)[0]
    });
  }
}



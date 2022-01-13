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
  dsNoviAngazmani = new MatTableDataSource<any>(Angazmani.filter(x=>!x.Prihvacen));
  dsPrihvaceniANgazmani = new MatTableDataSource<any>(Angazmani.filter(x=>x.Prihvacen));

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

  Detalji(id:number){
    this.dialog.open(OglasDetaljiComponent,{
      data: Angazmani.filter(x=>x.ID==id)[0]
    });
  }
}



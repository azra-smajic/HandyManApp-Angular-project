import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Angazman } from 'src/app/data/classes';
import { Angazmani } from 'src/app/data/database/podaci';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { OglasDetaljiComponent } from '../../oglas-detalji/oglas-detalji.component';

@Component({
  selector: 'app-noviangazmani',
  templateUrl: './noviangazmani.component.html',
  styleUrls: ['./noviangazmani.component.css']
})
export class NoviangazmaniComponent implements AfterViewInit {
  displayedColumns: string[] = ['Naziv', 'Datum', 'Vrijeme', 'KratakOpis', 'Akcije'];
  dsNoviAngazmani = new MatTableDataSource<any>(Angazmani.filter(x => !x.Prihvacen && !x.Obrisan));

  @ViewChild(MatPaginator, { static: true }) pagNoviAngazmani!: MatPaginator;

  constructor(private toastr: ToastrService, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dsNoviAngazmani.paginator = this.pagNoviAngazmani;
  }


  ngOnInit() {
    this.pagNoviAngazmani._intl.itemsPerPageLabel = this.pagNoviAngazmani._intl.itemsPerPageLabel = "Pregled angažmana po stranici: ";
    this.pagNoviAngazmani._intl.nextPageLabel = this.pagNoviAngazmani._intl.nextPageLabel = "Sljedeća stranica";
    this.pagNoviAngazmani._intl.firstPageLabel = this.pagNoviAngazmani._intl.firstPageLabel = "Vrati se na prvu stranicu";
    this.pagNoviAngazmani._intl.lastPageLabel = this.pagNoviAngazmani._intl.lastPageLabel = "Idi na zadnju stranicu";
    this.pagNoviAngazmani._intl.previousPageLabel = this.pagNoviAngazmani._intl.previousPageLabel = "Prethodna stranica";

  }

  async PrihvatiAngazman(id: number) {
    if (await this.openDialog('Pitanje','Jeste li sigurni da želite prihvatiti ovaj angažman?')) {
      Angazmani.find(x => x.ID == id)!.Prihvacen = true;
      this.UcitajAngazmane();
      this.toastr.success("Uspješno ste prihvatili novi angažman.");
    }
  }

  async OdbijAngazman(id: number) {

    if (await this.openDialog('Pitanje','Jeste li sigurni da želite odbiti ovaj angažman?')) {
        Angazmani.find(x => x.ID == id)!.Obrisan = true;
        this.UcitajAngazmane();
        this.toastr.warning("Odbili ste novi angažman.");
    }
  }

  UcitajAngazmane() {
    this.dsNoviAngazmani = new MatTableDataSource<any>(Angazmani.filter(x => !x.Prihvacen && !x.Obrisan));
    this.dsNoviAngazmani.paginator = this.pagNoviAngazmani;
  }

  async openDialog(header:string, sadrzaj:string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        Header: header,
        Sadrzaj: sadrzaj,
        OK: false
      },
    });

    let myPromise = new Promise(function (resolve) {
      dialogRef.afterClosed().subscribe(result => {1
        resolve(result?.OK ? true : false);
      })});

      return await myPromise;
    }

    Detalji(id:number){
      this.dialog.open(OglasDetaljiComponent,{
        data: Angazmani.filter(x=>x.ID==id)[0]
      });
    }
}


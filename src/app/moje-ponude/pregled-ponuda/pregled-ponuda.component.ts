
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavNotification, Ponuda } from 'src/app/data/classes';
import { Korisnici, MajstorPonude } from 'src/app/data/database/podaci';
import { ConfirmationDialogComponent } from 'src/app/forms/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-pregled-ponuda',
  templateUrl: './pregled-ponuda.component.html',
  styleUrls: ['./pregled-ponuda.component.css']
})
export class PregledPonudaComponent implements AfterViewInit {

  Podaci:any[]=[];
  OglasID!:number;
  Data:any;
  Ponude!:Ponuda[];

  pretraga: string = "";
  rezultatPretrage: boolean = false;
  filterPodaci: any[] = [];
  
  displayedColumnsPrihvaceni: string[] = ['Majstor','Grad', 'Datum', 'Opis', 'BrojTelefona','Akcije'];
  dsPonude:any;
  
  @ViewChild(MatPaginator, { static: true }) pagPrihvaceniAngazmani!: MatPaginator;
  
  constructor(private router:Router, public dialog: MatDialog, private toastr:ToastrService) {
    this.Data=this.router.getCurrentNavigation()?.extras.state;

    this.OglasID=this.Data.OglasID;

    this.UcitajPodatke();
  }

  UcitajPodatke(){
    this.Podaci=[];


    this.Ponude=MajstorPonude.filter(x=>x.OglasID==this.OglasID).reverse();

    for (const iterator of this.Ponude) {
      var majstor=Korisnici.filter(x=>x.ID==iterator.MajstorID)[0];
      let obj={
        ID:iterator.ID,
        Majstor:majstor.Ime+" "+majstor.Prezime,
        Datum:iterator.Datum,
        Opis:iterator.Opis,
        Grad:majstor.Grad,
        BrojTelefona:majstor.BrojTelefona
      };
      this.Podaci.push(obj);
    }    

    if (this.pretraga == "") {
      this.dsPonude=new MatTableDataSource<any>(this.Podaci);
      return;
    }

    var niz = this.Podaci.filter((x: any) => x.Majstor.includes(this.pretraga)
    || x.Datum.includes(this.pretraga) || x.Opis.includes(this.pretraga)
    || x.Grad.includes(this.pretraga) || x.BrojTelefona.includes(this.pretraga));
    this.dsPonude=new MatTableDataSource<any>(niz);


  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.UcitajPodatke();
    }
  }



  ngAfterViewInit() {
    this.dsPonude.paginator=this.pagPrihvaceniAngazmani;
  }

  ngOnInit(){
    this.pagPrihvaceniAngazmani._intl.itemsPerPageLabel="Pregled ponuda po stranici: ";
    this.pagPrihvaceniAngazmani._intl.nextPageLabel=="Sljedeća stranica";
    this.pagPrihvaceniAngazmani._intl.firstPageLabel ="Vrati se na prvu stranicu";
    this.pagPrihvaceniAngazmani._intl.lastPageLabel="Idi na zadnju stranicu";
    this.pagPrihvaceniAngazmani._intl.previousPageLabel="Prethodna stranica";
  }

  RouteDetalji(){
    this.router.navigateByUrl("/angazman")
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

  async OdbijAngazman(id: number) {

    if (await this.openDialog('Pitanje','Jeste li sigurni da želite odbiti ovu ponudu?')) {
        this.toastr.success("Uspješno ste odbili ponudu za Vaš oglas.");
        MajstorPonude.splice(id-1, 1);
        NavNotification.AzraSmajicOdbilaPonudu=true;
        NavNotification.Hidden=false;
        this.UcitajPodatke();
    }
  }
}



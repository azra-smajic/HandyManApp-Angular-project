import { Component, OnInit } from '@angular/core';
import {MojiOglasi, Oglasi} from "../data/database/podaci";
import {Router} from "@angular/router";
import { ConfirmationDialogComponent } from '../forms/confirmation-dialog/confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mojioglasi',
  templateUrl: './mojioglasi.component.html',
  styleUrls: ['./mojioglasi.component.css']
})
export class MojioglasiComponent implements OnInit {
  pageOfItems: any;
  p:number=1;
  oglasi:any;

  constructor(private router:Router, private toastr:ToastrService, private dialog:MatDialog) {
    this.oglasi=MojiOglasi;
  }

  ngOnInit(): void {
  }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  UrediOglas(indeks:any,oglas:any){
    this.router.navigateByUrl("/dodajOglas",{state:{oglas:oglas, indeks:indeks}})
  }


  async Obrisi(indeks:number) {

    if (await this.openDialog('Pitanje','Jeste li sigurni da želite obrisati ovaj oglas?')) {
        this.toastr.success("Uspješno ste obrisali svoj oglas.");
        MojiOglasi.splice(indeks,1);
        Oglasi.splice(indeks,1)
    }
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
}

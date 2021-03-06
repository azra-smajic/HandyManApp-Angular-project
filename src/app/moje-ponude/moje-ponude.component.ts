import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {  MajstorPonude, MojePonude, PotraziteljOglasi} from "../data/database/podaci";
import { ConfirmationDialogComponent } from '../forms/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-moje-ponude',
  templateUrl: './moje-ponude.component.html',
  styleUrls: ['./moje-ponude.component.css']
})
export class MojePonudeComponent implements OnInit {

  pageOfItems: any;
  p:number=1;
  oglasi:any;
  ogl:any;
  constructor(private router:Router, private toastr:ToastrService, private dialog:MatDialog) {
    this.oglasi=PotraziteljOglasi;
    console.log(this.oglasi)
  }

  ngOnInit(): void {
  }
  onChangePage(pageOfItems: any) {
    this.pageOfItems = pageOfItems;
  }
  
  async   Obrisi(indeks:any) {

    if (await this.openDialog('Upozorenje','Jeste li sigurni da želite obrisati svoj kvar?')) {
      PotraziteljOglasi.pop();
      console.log(indeks)
      this.toastr.success("Uspješno ste obrisali svoj kvar.","Čestitamo")
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

  UrediOglas(indeks:any,oglas:any){
    this.router.navigateByUrl("/objavi-kvar",{state:{oglas:oglas, indeks:indeks}})
  }

  PregledPonuda(id:number){
    var ponude=MajstorPonude.filter(x=>x.OglasID==id);
    if(ponude.length==0){
      this.toastr.error("Nemate ponuda za ovaj kvar.","Greška")
      return;
    }
    console.log(id)
    this.router.navigateByUrl("/pregled-ponuda", {state: {OglasID:id}});
  }
}

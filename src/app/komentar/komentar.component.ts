import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.css']
})
export class KomentarComponent implements OnInit {

  komentari:any;
  opis:string="";
  constructor(@Inject(MAT_DIALOG_DATA) public data: {comments: any},public toastr:ToastrService) {
    this.komentari=data.comments;
  }

  ngOnInit(): void {
  }
Komentiraj(opis:any){
    this.komentari.push({
      Ime:'NoviKorisnik',
      Opis:opis
    })
  this.toastr.success("Uspješno ste komentarisali majstora");
}
}

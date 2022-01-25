import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { Toast, ToastrService } from "ngx-toastr";
import * as buffer from "buffer";
import { MatDialog } from "@angular/material/dialog";
import { KomentarComponent } from "../komentar/komentar.component";
import { Komenari } from '../data/database/podaci';
import { InfoService } from '../data/logger-info/info.service';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {
  oglas: any;
  p: number = 1;
  brojac: number = 0;
  pageOfItems: any;
  komentari: any = [];
  constructor(public router: Router, public fb: FormBuilder, public toastr: ToastrService, public dialog: MatDialog) {
    this.oglas = router.getCurrentNavigation()?.extras.state;
    this.komentari = Komenari;
  }
  form = this.fb.group({
    rating: ['', Validators.required]
  })

  ngOnInit(): void { }

  Routeangazman() {
    if (InfoService.LogiraniKorisnik == null)
      this.toastr.error("Ova opcija je dostupna samo za registrovane korisnike.", "Greška")
    else
      this.router.navigateByUrl("/angazman", { state: this.oglas })
  }
  ChaneRating() {
    var NovaOcjena = (this.oglas.Ocjena + <number>this.form.value.rating) / 2;
    this.oglas.Ocjena = NovaOcjena;
    this.toastr.success("Uspješno ste ocijenili majstora")
  }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  OpenComment() {
    var dialogResponse = this.dialog.open(KomentarComponent, { data: { comments: this.komentari } })
  }
}

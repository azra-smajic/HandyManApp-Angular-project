import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Toast, ToastrService} from "ngx-toastr";
import * as buffer from "buffer";
import {MatDialog} from "@angular/material/dialog";
import {KomentarComponent} from "../komentar/komentar.component";

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {
oglas:any;
  p:number=1;
  brojac:number=0;
  pageOfItems: any;
komentari:any=[];
  constructor(public router:Router, public fb:FormBuilder,public toastr:ToastrService,public dialog:MatDialog) {
    this.oglas=router.getCurrentNavigation()?.extras.state;
    for(let i =0;i<6;i++){
      this.komentari.push({Ime:"Korisnik "+i,

        Opis:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue\n" +
          "felis"+i

      })}
  }
  form=this.fb.group({
rating:['',Validators.required]
  })

  ngOnInit(): void {

  }
  ChaneRating(){
      var NovaOcjena = (this.oglas.Ocjena + <number>this.form.value.rating) / 2;
      this.oglas.Ocjena = NovaOcjena;
      this.toastr.success("Uspješno ste ocijenili majstora")
    }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  OpenComment(){
    var dialogResponse=this.dialog.open(KomentarComponent,{data:{comments:this.komentari}})
  }
}

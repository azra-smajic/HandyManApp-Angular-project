import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MojePonude, MojiOglasi} from "../data/database/podaci";

@Component({
  selector: 'app-moje-ponude',
  templateUrl: './moje-ponude.component.html',
  styleUrls: ['./moje-ponude.component.css']
})
export class MojePonudeComponent implements OnInit {

  pageOfItems: any;
  p:number=1;
  oglasi:any;
  constructor(private router:Router) {
    this.oglasi=MojePonude;
  }

  ngOnInit(): void {
  }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  Obrisi(indeks:any) {
    MojePonude.splice(indeks,1)

  }
  UrediOglas(indeks:any,oglas:any){
    this.router.navigateByUrl("/addPonuda",{state:{oglas:oglas, indeks:indeks}})
  }

}

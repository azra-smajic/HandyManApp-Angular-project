import { Component, OnInit } from '@angular/core';
import {MojiOglasi} from "../data/database/podaci";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mojioglasi',
  templateUrl: './mojioglasi.component.html',
  styleUrls: ['./mojioglasi.component.css']
})
export class MojioglasiComponent implements OnInit {
  pageOfItems: any;
  p:number=1;
  oglasi:any;
  constructor(private router:Router) {
    this.oglasi=MojiOglasi;
  }

  ngOnInit(): void {
  }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  Obrisi(indeks:any) {
  MojiOglasi.splice(indeks,1)

  }
  UrediOglas(indeks:any,oglas:any){
    this.router.navigateByUrl("/dodajOglas",{state:{oglas:oglas, indeks:indeks}})
  }
}

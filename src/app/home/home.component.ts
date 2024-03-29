import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DBMock} from "../DBMock";
import {Oblast} from "../Data";
import {PageEvent} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { Oglasi } from '../data/database/podaci';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  p:number=1;
  oglasi:any=[];
  oglasiCijeli:any=[];
  pageOfItems: any;
  rezultatPretrage:any=true;
  @ViewChild('dugme1') dugme1: any;
  @ViewChild('dugme2') dugme2: any;
  @ViewChild('dugme3') dugme3: any;
  @ViewChild('dugme4') dugme4: any;
  @ViewChild('dugme5') dugme5: any;
  @ViewChild('elementRef') elementRef: any;
  pretraga:any="";
  constructor(public router:Router,private toastr:ToastrService) {
    this.oglasi=Oglasi.reverse();
     this.oglasiCijeli=this.oglasi;
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
    this.dugme1.nativeElement.style.background="darkblue";
  }

  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  Pretraga(){
    this.rezultatPretrage=true;
    if(this.pretraga==""){
      this.oglasi=this.oglasiCijeli;
      return;}
    var niz=this.oglasi.filter((x:any)=>x.Naziv.startsWith(this.pretraga) || x.Grad.startsWith(this.pretraga) || x.Podrucje.startsWith(this.pretraga));
    if(niz==null || niz.length==0)
    {
      this.rezultatPretrage=false;
      }
    this.oglasi=niz;
  }
  keyDownFunction(event:any) {
    if (event.keyCode === 13) {
     this.Pretraga();
    }
  }
  RouteDetalji(oglas:any){
    this.router.navigateByUrl("/detalji",{state:oglas})
  }
  ClickElektrika(){
    this.rezultatPretrage=true;
    this.dugme2.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Elektrika");
    this.oglasi=niz;

  }
  ClickSve(){
    this.rezultatPretrage=true;
    this.dugme1.nativeElement.style.background="darkblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

  }
  ClickKeramika(){
    this.rezultatPretrage=true;
    this.dugme3.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Keramika");
    this.oglasi=niz;
  }
  ClickCiscenje(){
    this.rezultatPretrage=true;
    this.dugme4.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Čiščenje");
    this.oglasi=niz;

  }
  ClickCijevi(){
    this.rezultatPretrage=true;
    this.dugme5.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Cijevne instalacije");
    this.oglasi=niz;

  }
}

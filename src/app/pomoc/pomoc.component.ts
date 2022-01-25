import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Oglasi, Pomoc} from "../data/database/podaci";

@Component({
  selector: 'app-pomoc',
  templateUrl: './pomoc.component.html',
  styleUrls: ['./pomoc.component.css']
})
export class PomocComponent implements AfterViewInit {

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
    this.oglasi=Pomoc;
    this.oglasiCijeli=this.oglasi;
    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Opće");
    this.oglasi=niz;
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
    var niz=this.oglasiCijeli.filter((x:any)=>x.Naziv.includes(this.pretraga) ||  x.Opis.includes(this.pretraga));
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
  ClickPrijava(){
    this.rezultatPretrage=true;
    this.dugme2.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Prijava/Login");
    this.oglasi=niz;

  }
  ClickOpce(){
    this.rezultatPretrage=true;
    this.dugme1.nativeElement.style.background="darkblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;
    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Opće");
    this.oglasi=niz;

  }
  ClickOglas(){
    this.rezultatPretrage=true;
    this.dugme3.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Oglasi");
    this.oglasi=niz;
  }
  ClickPonude(){
    this.rezultatPretrage=true;
    this.dugme4.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Ponude");
    this.oglasi=niz;

  }
  ClickAngazman(){
    this.rezultatPretrage=true;
    this.dugme5.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Angažmani");
    this.oglasi=niz;

  }

}

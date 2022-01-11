import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DBMock} from "../DBMock";
import {Oblast} from "../Data";
import {PageEvent} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
  @ViewChild('dugme1') dugme1: any;
  @ViewChild('dugme2') dugme2: any;
  @ViewChild('dugme3') dugme3: any;
  @ViewChild('dugme4') dugme4: any;
  @ViewChild('dugme5') dugme5: any;
  @ViewChild('elementRef') elementRef: any;
  pretraga:any="";
  constructor(public router:Router,private toastr:ToastrService) {
    for(let i =0;i<6;i++){
      this.oglasi.push({Naziv:"Majstor E "+i,
        Grad:"Grad "+i,
        Podrucje:"Kanton "+i,
        Slika:"Firma.jpg",
        Oblast:"Elektrika",
        BrojTelefona:"061/000-00"+i,
        Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
        Ocjena:Math.random()})
    }
    for(let i =0;i<6;i++){
      this.oglasi.push({Naziv:"Majstor K "+i,
        Podrucje:"Kanton "+i,
        Grad:"Grad "+i,
        Slika:"Firma.jpg",
        Oblast:"Keramika",
        BrojTelefona:"061/000-00"+i,
        Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
        Ocjena:Math.random()})
    }
    for(let i =0;i<6;i++){
      this.oglasi.push({Naziv:"Majstor C "+i,
        Podrucje:"Kanton "+i,
        Grad:"Grad "+i,
        Slika:"Firma.jpg",
        Oblast:"Ciscenje",
        BrojTelefona:"061/000-00"+i,
        Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
        Ocjena:Math.random()})
    }
    for(let i =0;i<6;i++){
      this.oglasi.push({Naziv:"Majstor CI "+i,
        Podrucje:"Kanton "+i,
        Grad:"Grad "+i,
        Slika:"Firma.jpg",
        Oblast:"Cijevne instalacije",
        BrojTelefona:"061/000-00"+i,
        Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
        Ocjena:Math.random()})
    }

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
    if(this.pretraga==""){
      this.oglasi=this.oglasiCijeli;
      this.toastr.warning("Nije pronađen rezultat za vašu pretragu")
      return;}
    var niz=this.oglasiCijeli.filter((x:any)=>x.Naziv==this.pretraga || x.Grad==this.pretraga);
    if(niz==null || niz.length==0)
    {
      niz=this.oglasiCijeli;
      this.toastr.warning("Nije pronađen rezultat za vašu pretragu")
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
    this.dugme1.nativeElement.style.background="darkblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme4.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

  }
  ClickKeramika(){
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
    this.dugme4.nativeElement.style.background="darkblue";
    this.dugme1.nativeElement.style.background="deepskyblue";
    this.dugme3.nativeElement.style.background="deepskyblue";
    this.dugme2.nativeElement.style.background="deepskyblue";
    this.dugme5.nativeElement.style.background="deepskyblue";
    this.oglasi=this.oglasiCijeli;

    var niz=this.oglasi.filter((x:any)=>x.Oblast=="Ciscenje");
    this.oglasi=niz;

  }
  ClickCijevi(){
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

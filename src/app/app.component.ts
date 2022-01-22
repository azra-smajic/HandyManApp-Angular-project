import {Component, OnInit, ViewChild} from '@angular/core';
import { Korisnik } from './data/classes';
import { InfoService } from './data/logger-info/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HandyManApp';
  @ViewChild('pretraga') dugme3: any;
  @ViewChild('dodajOglas') dugme4: any;
  @ViewChild('evidencija') dugme5: any;
  @ViewChild('mojiOglasi') dugme6: any;


  GetUser=()=> InfoService?.LogiraniKorisnik;
  GetUloga=()=>InfoService?.LogiraniKorisnik?.Uloga;

  OdjaviSe=()=> InfoService.LogiraniKorisnik=null;
  ngAfterViewInit() {

    this.dugme3.nativeElement.style.color="darkblue";
  }
  clickPretraga(){
    this.dugme3.nativeElement.style.color="darkblue";
    this.dugme4.nativeElement.style.color="white";
    this.dugme5.nativeElement.style.color="white";
    this.dugme6.nativeElement.style.color="white";
  }
  clickOglas(){
    this.dugme3.nativeElement.style.color="white";
    this.dugme4.nativeElement.style.color="darkblue";
    this.dugme5.nativeElement.style.color="white";
    this.dugme6.nativeElement.style.color="white";
  }
  clickEvidencija(){
    this.dugme3.nativeElement.style.color="white";
    this.dugme4.nativeElement.style.color="white";
    this.dugme5.nativeElement.style.color="darkblue";
    this.dugme6.nativeElement.style.color="white";
  }
  clickMojiOglasi(){
    this.dugme3.nativeElement.style.color="white";
    this.dugme4.nativeElement.style.color="white";
    this.dugme5.nativeElement.style.color="white";
    this.dugme6.nativeElement.style.color="darkblue";
  }
  Pocetna(){
    this.clickPretraga();
  }
  ClickDodajPonudu(){

  }
  ngOnInit(): void {
  }
}

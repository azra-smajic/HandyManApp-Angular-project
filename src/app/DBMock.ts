import {Oblast, Oglas} from "./Data";


export  class DBMock{
 oglasi:any=[];
elektrika:any=new Oblast();
ciscenje:any=new Oblast();
keramika:any=new Oblast();
cijevneInstalacije:any=new Oblast();
constructor() {
  this.oglasi[1]=[{Naziv:"Majstor "+1,
    Grad:"Grad "+1,
    Slika:"Firma.jpg",
    Oblast:"Oblast "+1,
    BrojTelefona:"BrojTelefona "+1,
    Opis:"Opis "+1,
    Ocjena:Math.random()}]
  this.elektrika.Naziv="Elektrika";
  this.cijevneInstalacije.Naziv="Cijevne instalacije";
  this.ciscenje.Naziv="Ciscenje";
  this.keramika.Naziv="Keramika;"
}


}

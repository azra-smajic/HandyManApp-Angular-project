import { Angazman, Korisnik } from "../classes";

export const Korisnici: Korisnik[] = [
    {
        ID: 1,
        Ime: "Tajib",
        Prezime: "Vikalo",
        Spol: "Muški",
        Username: "tajci",
        Password: "tajci",
        BrojTelefona: "+38761155681",
        Uloga: "Majstor",
        Kanton: "Tuzlanski",
        Grad: "Srebrenik"
    },
    {
        ID: 1,
        Ime: "Azra",
        Prezime: "Smajic",
        Spol: "Ženski",
        Username: "azra",
        Password: "azra",
        BrojTelefona: "+38762796504",
        Uloga: "Potražitelj usluga",
        Kanton: "Hercegovačko neretvanski",
        Grad: "Konjic"
    },
];

export const Kantoni = [
    {
      id: "1", naziv: "Kanton Sarajevo",
      gradovi: [
        { id: "1", naziv: "Stari Grad" },
        { id: "2", naziv: "Hadžići" },
        { id: "3", naziv: "Vogošća" },
      ]
    },
    {
      id: "2", naziv: "Tuzlanski",
      gradovi: [
        { id: "1", naziv: "Tuzla" },
        { id: "2", naziv: "Srebrenik" },
        { id: "3", naziv: "Gračanica" },
      ]
    },
    {
      id: "3", naziv: "Hercegovačko neretvanski",
      gradovi: [
        { id: "1", naziv: "Mostar" },
        { id: "2", naziv: "Konjic" },
        { id: "3", naziv: "Stolac" },
      ]
    },
    { id: "4", naziv: "Brčko Distrikt" },
  ];

  export const Oglasi:any=[];
  export const MojiOglasi:any=[];
  export const Oblasti:any=[{
    Naziv:'Elektrika',},
    {Naziv: 'Ciscenje'},
    {Naziv: 'Keramika'},
    {Naziv: 'Cijevne instalacije'},
  ];

  export const Komenari:any=[];
MojiOglasi.push({Naziv:"PROBATEST ",
  Grad:"Mostar",
  Podrucje:"Hercegovačko neretvanski",
  Slika:"Firma.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

  for(let i =0;i<6;i++){
    Komenari.push({Ime:"Korisnik "+i,

      Opis:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue\n" +
        "felis"+i

    })}

  for(let i =0;i<6;i++){
    Oglasi.push({Naziv:"Majstor E "+i,
      Grad:"Grad "+i,
      Podrucje:"Kanton "+i,
      Slika:"Firma.jpg",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-00"+i,
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
      Ocjena:Math.random()})
  }
  for(let i =0;i<6;i++){
    Oglasi.push({Naziv:"Majstor K "+i,
      Podrucje:"Kanton "+i,
      Grad:"Grad "+i,
      Slika:"Firma.jpg",
      Oblast:"Keramika",
      BrojTelefona:"061/000-00"+i,
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
      Ocjena:Math.random()})
  }
  for(let i =0;i<6;i++){
    Oglasi.push({Naziv:"Majstor C "+i,
      Podrucje:"Kanton "+i,
      Grad:"Grad "+i,
      Slika:"Firma.jpg",
      Oblast:"Ciscenje",
      BrojTelefona:"061/000-00"+i,
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
      Ocjena:Math.random()})
  }
  for(let i =0;i<6;i++){
    Oglasi.push({Naziv:"Majstor CI "+i,
      Podrucje:"Kanton "+i,
      Grad:"Grad "+i,
      Slika:"Firma.jpg",
      Oblast:"Cijevne instalacije",
      BrojTelefona:"061/000-00"+i,
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  "+i,
      Ocjena:Math.random()})
  }

  export const Uloge = ["Potražitelj usluga", "Majstor"];

  export const Spolovi = ["Muški", "Ženski", "Neodređeno"];

  export var Angazmani:Angazman[]=[
    {
      ID:1,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu ašine ne radi centrifuguašine ne radi centrifuguašine ne radi centrifuguašine ne radi centrifuguašine ne radi centrifugu ašine ne radi centrifuguašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../Logo1.png",
      ImePotrazitelja:"Mujo Hamzić",
      KontaktTelefon:"062-159-193",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:2,
      Naziv:"Izljevanje ploče",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Izljevanje ploče",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:3,
      Naziv:"Popravka limarije",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:true,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:4,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:5,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:6,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:7,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:8,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:9,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
    {
      ID:10,
      Naziv:"Popravka veš mašine",
      Datum:"27/07/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pofalići Sarajevo"
    },
  ];

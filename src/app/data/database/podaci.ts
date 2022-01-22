import { Angazman, Korisnik, Ponuda, PotraziteljOglas } from "../classes";

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
        ID: 2,
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
  export const Ponude:any=[];
  export const MojePonude:any=[];
  export const Oblasti:any=[{
    Naziv:'Elektrika',},
    {Naziv: 'Ciscenje'},
    {Naziv: 'Keramika'},
    {Naziv: 'Cijevne instalacije'},
  ];

  export const MajstorPonude:Ponuda[]=[];

  MajstorPonude.push(
    {
    ID:1,
    OglasID:1,
    PotraziteljID:2,
    MajstorID:1,
    Opis:"Ovo Vam mogu riješiti za 50 KM. Kontaktirajte me ili zakažite termin",
    Datum:"22.01.2022."
  }
  )

  export var PotraziteljOglasi:PotraziteljOglas[]=[
    {
      ID:1,
      Naziv:"Popravka mašine za veš",
      Grad:"Mostar",
      Adresa:"Zalik",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/masina.jpg",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-000",
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
      PotraziteljID:3,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:2,
      Naziv:"Popravka mašine za suđe",
      Grad:"Mostar",
      Adresa:"Zalik",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/Sudje.jpg",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-000",
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
      PotraziteljID:3,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:3,
      Naziv:"Popravka mašine za veš",
      Grad:"Mostar",
      Adresa:"Zalik",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/Elgrijalica.jpg",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-000",
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
      PotraziteljID:2,
      Potrazitelj:"Azra Smajić",
      Notification:false
    }
];

  export const Komenari:any=[];
MojiOglasi.push({Naziv:"PROBATEST ",
  Grad:"Mostar",
  Podrucje:"Hercegovačko neretvanski",
  Slika:"http://localhost:4200/assets/logo.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})


MojePonude.push({Naziv:"Popravka mašine za veš",
  Grad:"Mostar",
  Podrucje:"Hercegovačko neretvanski",
  Slika:"http://localhost:4200/assets/masina.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

  MojePonude.push({Naziv:"Popravka mašine za suđe",
  Grad:"Mostar",
  Podrucje:"Hercegovačko neretvanski",
  Slika:"http://localhost:4200/assets/Sudje.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

  MojePonude.push({Naziv:"Popravka el. grijalice",
  Grad:"Mostar",
  Podrucje:"Hercegovačko neretvanski",
  Slika:"http://localhost:4200/assets/Elgrijalica.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
  




  for(let i =0;i<6;i++){
    Komenari.push({Ime:"Korisnik "+i,

      Opis:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue\n" +
        "felis"+i

    })}

Oglasi.push({Naziv:"Isak Banić",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/19.png",
  Oblast:"Cijevne instalacije",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
    Oglasi.push({Naziv:"Amar Šahinović",
      Grad:"Mostar",
      Podrucje:"Hercegovačko-Neretvanski",
      Slika:"http://localhost:4200/assets/1.jfif",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-00",
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
      Ocjena:Math.random()})
Oglasi.push({Naziv:"Dani Turić",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/7.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

Oglasi.push({Naziv:"Dani Mulić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/2.png",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Arman Musić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/14.jpg",
  Oblast:"Ciscenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Imran Čusto",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/3.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Harun Čavčić",
  Grad:"Sarajevo",
  Podrucje:"Sarajevski kanton",
  Slika:"http://localhost:4200/assets/4.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Muhamed Darić",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/21.jpg",
  Oblast:"Cijevne instalacije",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

Oglasi.push({Naziv:"Edin Muzaferija",
  Grad:"Zenica",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/5.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Hanad Đulić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/8.jfif",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Ahmed Isić",
  Grad:"Doboj",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/6.jfif",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})





Oglasi.push({Naziv:"Ernes Mustafić",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/9.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Admir Nuhić",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/13.jpg",
  Oblast:"Ciscenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Nizan Lapo",
  Grad:"Sarajevo",
  Podrucje:"Sarajevski kanton",
  Slika:"http://localhost:4200/assets/10.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Muhamed Halebić",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/15.jpg",
  Oblast:"Ciscenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Ali Kadić",
  Grad:"Zenica",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/11.png",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Emrah Zvizdić",
  Grad:"Sarajevo",
  Podrucje:"Sarajevski kanton",
  Slika:"http://localhost:4200/assets/16.jpg",
  Oblast:"Ciscenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Mirsad Bećić",
  Grad:"Doboj",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/12.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})



Oglasi.push({Naziv:"Adin Musić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/20.png",
  Oblast:"Cijevne instalacije",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})



Oglasi.push({Naziv:"Dino Muzaferija",
  Grad:"Zenica",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/17.jpg",
  Oblast:"Ciscenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
Oglasi.push({Naziv:"Tarik Bojkić",
  Grad:"Doboj",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/18.png",
  Oblast:"Ciscenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})














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




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
    {
      ID: 3,
      Ime: "Amir",
      Prezime: "Karaga",
      Spol: "Muški",
      Username: "samir",
      Password: "samir",
      BrojTelefona: "+38761741598",
      Uloga: "Potražitelj usluga",
      Kanton: "Zeničko-dobojski kanton",
      Grad: "Tešanj"
  },
];

export const Kantoni = [
    {
      id: "1", naziv: "Kanton Sarajevo",
      gradovi: [
        { id: "1", naziv: "Stari Grad" },
        { id: "2", naziv: "Hadžići" },
        { id: "3", naziv: "Novi Grad" },
        { id: "4", naziv: "Ilijaš" },
        { id: "5", naziv: "Ilidža" },
        { id: "6", naziv: "Trnovo" },
        { id: "7", naziv: "Općina Centar" },
        { id: "8", naziv: "Novo Sarajevo" }
      ]
    },
    {
      id: "2", naziv: "Tuzlanski kanton",
      gradovi: [
        { id: "1", naziv: "Tuzla" },
        { id: "2", naziv: "Srebrenik" },
        { id: "3", naziv: "Gračanica" },
        { id: "4", naziv: "Gradačac" },
        { id: "5", naziv: "Lukavac" },
        { id: "6", naziv: "Kladanj" },
        { id: "7", naziv: "Sapna" },
        { id: "8", naziv: "Čelić" },
      ]
    },
    {
      id: "3", naziv: "Hercegovačko-neretvanski kanton",
      gradovi: [
        { id: "1", naziv: "Mostar" },
        { id: "2", naziv: "Konjic" },
        { id: "3", naziv: "Stolac" },
        { id: "4", naziv: "Jablanica" },
        { id: "5", naziv: "Prozor" },
        { id: "6", naziv: "Ljubuški" },
        { id: "7", naziv: "Trebinje" },
        { id: "8", naziv: "Počitelj" },
      ]
    },
    { id: "4", naziv: "Brčko Distrikt" },
    {
      id: "5", naziv: "Zeničko-dobojski kanton",
      gradovi: [
        { id: "1", naziv: "Zenica" },
        { id: "2", naziv: "Žepče" },
        { id: "3", naziv: "Zavidovići" },
        { id: "4", naziv: "Kakanj" },
        { id: "5", naziv: "Visoko" },
        { id: "6", naziv: "Tešanj" },
        { id: "7", naziv: "Maglaj" },
        { id: "8", naziv: "Vareš" },
      ]
    },
  ];

  export const Oglasi:any=[];
  export const MojiOglasi:any=[];
export const Ponude:any=[];
export const MojePonude:any=[];
export const Pomoc:any=[];
  export const Oblasti:any=[{
    Naziv:'Elektrika',},
    {Naziv: 'Ciscenje'},
    {Naziv: 'Keramika'},
    {Naziv: 'Cijevne instalacije'},
  ];
Pomoc.push({
  Naziv:"Funkcionalnosti",
  Oblast: "Opće",
  Opis: "Cijela aplikacija se vodi kroz dvije uloge: majstor i potražitelj usluga. U zavisnosti koju ulogu odaberete prilikom svoje registracije" +
    "nude vam se razne opcije. Ukoliko ste majstor vaše glavne funkcionalnosti su vezane za objavljivanje oglasa i evidenciju angažmana" +
    "a ukoliko ste potražitelj usluge imate sve funkcionalnosti potrebne kako bi pronašli odgovarajuću uslugu. Detaljnjije o funkcionalnostima " +
    "će te pronaći u podnaslovima prikazanim ispod."
})
Pomoc.push({
  Naziv:"Prijava",
  Oblast: "Prijava/Login",
  Opis: "Klikom na dugme u glavnom meniju na vrhu stranice pod nazivom Prijavi se bivate upućeni na prijavu na aplikaciju. Za uspješnu prijavu morate unijeti ispravno korisničko ime i lozinku"
})
Pomoc.push({
  Naziv:"Registracija",
  Oblast: "Prijava/Login",
  Opis: "Ukoliko nemate napravljen korisnički račun, kako bi isti napravili, u glavnom meniju pritisnite opciju Prijavi se. U dnu forme za popunjavanje nalazi se link pod nazivom Nemate profil?. Klikom na njega bit ćete upućeni na registracijsku formu"
})
Pomoc.push({
  Naziv:"Dodavanje oglasa",
  Oblast: "Oglasi",
  Opis: "Ukoliko imate ulogu majstora jedna od osnovnih funkcionalnosti jeste dodavanje oglasa. U glavnom meniju se nalazi opcija pod nazivom dodavanje oglasa koja vam omogućava tu akciju. Otvaranjem forme za dodavanje oglasa kroz tri koraka treba da uneste podatke prema datim naputcima"

})

Pomoc.push({
  Naziv:"Moji oglasi",
  Oblast: "Oglasi",
  Opis: "Ukoliko imate ulogu majstora također imate mogućnost pregleda i uređivanja vlastitih oglasa. Klikom na stavku Moji oglasi, koja se nalazi u navigacijskom meniju dobijate prikaz svih oglasa koje ste kreirali. Klikom na dugme uredi, isti možete urediti ili klikom na dugme obriši isti možete obrisati"

})
Pomoc.push({
  Naziv:"Pretraga oglasa",
  Oblast: "Oglasi",
  Opis: "Bez obzira na ulogu u sistemu i na to da li ste prijavljeni ili ne, klikom na sekciju pretraga oglasa otvara se prozor koji vam omogućava pregled i pretragu svih objavljenih oglasa od strane majstora. Oglase možete filtrirati prema kategoriji pritiskom na opcije koje se nalaze sa lijeve strane ili prema imenu majstora, gradu ili regiji koju pokriva unosom pojma unutar polja za pretragu u vrhu stranice"

})
Pomoc.push({
  Naziv:"Dodaj kvar",
  Oblast: "Ponude",
  Opis: "Ukoliko imate ulogu potražitelja usluga jedna od osnovnih funkcionalnosti jeste dodavanje kvara. U glavnom meniju se nalazi opcija pod nazivom 'Objavi kvar' koja vam omogućava tu akciju. Otvaranjem forme za objavljivanje kvara kroz tri koraka treba da uneste podatke prema datim uputama"

})

Pomoc.push({
  Naziv:"Moji kvarovi",
  Oblast: "Ponude",
  Opis: "Ukoliko imate ulogu potražitelja usluga također imate mogućnost pregleda i uređivanja vlastitih kvarova. Klikom na stavku Moji kvarovi, koja se nalazi u navigacijskom meniju dobijate prikaz svih kvarova koje ste objavili. Klikom na dugme uredi, isti možete urediti ili klikom na dugme obriši isti možete obrisati"

})
Pomoc.push({
  Naziv:"Nađi posao",
  Oblast: "Ponude",
  Opis: "Ukoliko imate ulogu majstora klikom na sekciju Nađi posao otvara se prozor koji vam omogućava pregled svih objavljenih oglasa u regiji koju pokrivate i kategoriji kojom se bavite. Pregledom detalja možete poslati ponudu za posao."
})
Pomoc.push({
  Naziv:"Dogovaranje angažmana",
  Oblast: "Angažmani",
  Opis: "Ukoliko niste prijavljeni na aplikaciju ili ste prijavljeni bez obzira na ulogu, imate mogućnost dogovaranja angažmana. Prilikom pretrage svaki oglas nosi opciju Detalji. Klikom na nju ulazite u sekciju koja prikazuje sve detalje o odreženom oglasu. Majsotra možete ocijeniti ili komentarisati. Također možete poslati ponudu za angažman tipkom na opciju dodaj angažman. Tom prilikom se otvara sekcija koja vas vodi kroz proces dodavanja angažmana."
})
Pomoc.push({
  Naziv:"Pregled novih angažmana",
  Oblast: "Angažmani",
  Opis: "Ukoliko ste prijavljeni kao majstor imate mogućnost evidencije angažmana koja uključuje i opciju pregleda svih angažmana koji su upućeni prema vama na osnovu objavljenog oglasa. Klikom na opciju u glavnom meniju pod nazivom Novi angažmani otvara se sekcija za pregled. O tim angažmanima možete pregledati detalji, prihvatiti ga ili odbiti."
})
Pomoc.push({
  Naziv:"Pregled prihvaćenih angažmana",
  Oblast: "Angažmani",
  Opis: "Ukoliko ste prijavljeni kao majstor imate mogućnost evidencije angažmana koja uključuje i opciju pregleda prihvaćenih angažmana klikom na opciju u glavnom meniju pod nazivom Prihvaćeni angažmani, možete vidjeti sve angažmane koje ste prethodno prihvatili"
})

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
      Opis:"Imam masinu za ves Whirpool, koja se pokvarila. Treba mi hitno to popraviti.",
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
      Opis:"Naime, dogadja mi se sad vec neko vrijeme da mi se onaj pretinac gdje ide tableta ne otvori i kad je mašina gotova vidim da je tableta jos uvijek unutra. Imam Whirpoll perilicu a pretinac se nalazi u vratima. Provjerila sam ladice i one su ok, sjednu na svoje mjesto kako treba i nikad nista ne viri iz njih sto bi moglo pritisnuti taj poklopac..",
      PotraziteljID:3,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:3,
      Naziv:"Popravka el. grijalice",
      Grad:"Mostar",
      Adresa:"Zalik",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/Elgrijalica.jpg",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-000",
      Opis:"Sinoć sam pokvario termostat na grijalici, i ostao je zaglavljen na 20 stepeni, plaćam duplo samo da se popravi",
      PotraziteljID:2,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:4,
      Naziv:"Rekonstrukcija keramičkih pločica",
      Grad:"Zenica",
      Adresa:"Ulica Maršala Tita 50",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/Plocice.jpg",
      Oblast:"Keramika",
      BrojTelefona:"061/159-741",
      Opis:"Potrebna mi je zamjena pločica u kuhinji. Pločice su dimenzije 40x30 cm-",
      PotraziteljID:2,
      Potrazitelj:"Amir Karaga",
      Notification:false
    },
    {
      ID:5,
      Naziv:"Generalno čišćenje spavaće sobe",
      Grad:"Mostar",
      Adresa:"Zalik",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/Ciscenje.jpg",
      Oblast:"Čišćenje",
      BrojTelefona:"061/000-000",
      Opis:"Tražim nekog da mi počisti spavaću sobu. Potrebno je izvršiti generalno čišćenje",
      PotraziteljID:2,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:6,
      Naziv:"Popravka cijevi za vodu",
      Grad:"Tuzla",
      Adresa:"Rudarska 20",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/Cijevi.jpg",
      Oblast:"Cijevne instalacije",
      BrojTelefona:"061/000-000",
      Opis:"Hitno mi neko treba zamijeniti cijev od tople vode u kuhinji. Evo perem mjesec dana suđe na hladnoj vodi.",
      PotraziteljID:2,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:7,
      Naziv:"Lijpljenje novih pločica",
      Grad:"Tuzla",
      Adresa:"Simin Han",
      Podrucje:"Tuzlanski kanton",
      Slika:"http://localhost:4200/assets/Kuhinja.jpeg",
      Oblast:"Keramika",
      BrojTelefona:"061/000-000",
      Opis:"Potreban mi je majstora da polijepi kuhinju sa pločicama. Plaćam po satu.",
      PotraziteljID:2,
      Potrazitelj:"Azra Smajić",
      Notification:false
    },
    {
      ID:8,
      Naziv:"Popravka veš mašine",
      Grad:"Konjic",
      Adresa:"Kolonija 26",
      Podrucje:"Hercegovačko-neretvanski kanton",
      Slika:"http://localhost:4200/assets/MasinaZaVes.jpg",
      Oblast:"Elektrika",
      BrojTelefona:"061/147-852",
      Opis:"Veš mašina mi ne radi već 5 dana",
      PotraziteljID:2,
      Potrazitelj:"Azra Smajić",
      Notification:false
    }
];

  export const Komenari:any=[];
MojiOglasi.push({Naziv:"Tajib Vikalo ",
  Grad:"Srebrenik",
  Podrucje:"Tuzlanski kanton",
  Slika:"http://localhost:4200/assets/1.jfif",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Vršim popravku svih električnih uređaja po veoma jeftinoj cijeni. Dolazim na teren i rješavam stvar na licu mjesta.",
  Ocjena:0.0})


MojePonude.push({Naziv:"Popravka mašine za veš",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-neretvanski kanton",
  Slika:"http://localhost:4200/assets/masina.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

  MojePonude.push({Naziv:"Popravka mašine za suđe",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-neretvanski kanton",
  Slika:"http://localhost:4200/assets/Sudje.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})

  MojePonude.push({Naziv:"Popravka el. grijalice",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-neretvanski kanton",
  Slika:"http://localhost:4200/assets/Elgrijalica.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:Math.random()})
  





    Komenari.push({Ime:"Mehmed Teodosić",

      Opis:"Najbolji majstor, rješi problem brzo a ne naplati previše, 100% preporuke od strane mene"})
Komenari.push({Ime:"Nedžad Hrustić",

  Opis:"Čovjek ponese sam svoj obrok, ne trebate bukvalno ništa dodavat, sve sam radi"})
Komenari.push({Ime:"Mehzad Rautić",

  Opis:"Nije došao na vrijeme, rekao je da će doć u tri sata a došo poslije šest, ne preporučujem"})
Komenari.push({Ime:"Nihad Hodžić",

  Opis:"Dobar je radnik, ali puno uneredi za sobom. Žena mi je cijeli dan čistila ostatke za njim. Sve u svemu, kakvih ima, dobar je"})





Oglasi.push({Naziv:"Isak Banić",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/19.png",
  Oblast:"Cijevne instalacije",
  BrojTelefona:"061/000-00",
  Opis:"Bavim se popravkom svih vrsta kvarova koji se tiču vodovoda, kanalizacije, cijevi i slično. Cijena mog angažmana uključuje i ruke i opremu",
  Ocjena:4.5})
    Oglasi.push({Naziv:"Amar Šahinović",
      Grad:"Mostar",
      Podrucje:"Hercegovačko-Neretvanski",
      Slika:"http://localhost:4200/assets/1.jfif",
      Oblast:"Elektrika",
      BrojTelefona:"061/000-00",
      Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
      Ocjena:3.4})
Oglasi.push({Naziv:"Dani Turić",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/7.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:5})

Oglasi.push({Naziv:"Dani Mulić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/2.png",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.4})
Oglasi.push({Naziv:"Arman Musić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/14.jpg",
  Oblast:"Čišćenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.2})
Oglasi.push({Naziv:"Imran Čusto",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/3.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.6})
Oglasi.push({Naziv:"Harun Čavčić",
  Grad:"Sarajevo",
  Podrucje:"Sarajevski kanton",
  Slika:"http://localhost:4200/assets/4.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.7})
Oglasi.push({Naziv:"Muhamed Darić",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/21.jpg",
  Oblast:"Cijevne instalacije",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.1})

Oglasi.push({Naziv:"Edin Muzaferija",
  Grad:"Zenica",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/5.jpg",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.2})
Oglasi.push({Naziv:"Hanad Đulić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/8.jfif",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.4})
Oglasi.push({Naziv:"Ahmed Isić",
  Grad:"Doboj",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/6.jfif",
  Oblast:"Elektrika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.5})





Oglasi.push({Naziv:"Ernes Mustafić",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/9.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.6})
Oglasi.push({Naziv:"Admir Nuhić",
  Grad:"Mostar",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/13.jpg",
  Oblast:"Čišćenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.7})
Oglasi.push({Naziv:"Nizan Lapo",
  Grad:"Sarajevo",
  Podrucje:"Sarajevski kanton",
  Slika:"http://localhost:4200/assets/10.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.8})
Oglasi.push({Naziv:"Muhamed Halebić",
  Grad:"Konjic",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/15.jpg",
  Oblast:"Čišćenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.6})
Oglasi.push({Naziv:"Ali Kadić",
  Grad:"Zenica",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/11.png",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.8})
Oglasi.push({Naziv:"Emrah Zvizdić",
  Grad:"Sarajevo",
  Podrucje:"Sarajevski kanton",
  Slika:"http://localhost:4200/assets/16.jpg",
  Oblast:"Ćišćenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.7})
Oglasi.push({Naziv:"Mirsad Bećić",
  Grad:"Doboj",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/12.jpg",
  Oblast:"Keramika",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.3})



Oglasi.push({Naziv:"Adin Musić",
  Grad:"Jablanica",
  Podrucje:"Hercegovačko-Neretvanski",
  Slika:"http://localhost:4200/assets/20.png",
  Oblast:"Cijevne instalacije",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:4.6})



Oglasi.push({Naziv:"Dino Muzaferija",
  Grad:"Zenica",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/17.jpg",
  Oblast:"Čišćenje",
  BrojTelefona:"061/000-00",
  Opis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ipsum molestie, tincidunt magna non, pharetra purus. Curabitur at tempus lacus, in ultricies eros. Cras ultricies congue lacinia. Curabitur sodales posuere justo, ac interdum leo vestibulum quis. Nullam cursus, arcu quis porttitor auctor, sem diam venenatis velit, et convallis ante diam nec tortor. Mauris efficitur mollis dictum. In hac habitasse platea dictumst. Nunc lacinia sem quis posuere consectetur.  ",
  Ocjena:3.8})
Oglasi.push({Naziv:"Tarik Bojkić",
  Grad:"Doboj",
  Podrucje:"Zeničko-Dobojski",
  Slika:"http://localhost:4200/assets/18.png",
  Oblast:"Čiščenje",
  BrojTelefona:"061/000-00",
  Opis:"Nudim usluge vakumskog čišćenja svih vrsta namještaja ili automobila po najnižim cijenama",
  Ocjena:4.9})

  Oglasi.push(MojiOglasi[0])














  export const Uloge = ["Potražitelj usluga", "Majstor"];

  export const Spolovi = ["Muški", "Ženski", "Neodređeno"];

  export var Angazmani:Angazman[]=[
    {
      ID:1,
      Naziv:"Popravka veš mašine",
      Datum:"27/01/2022",
      Vrijeme:"13:00",
      Opis:"Mašine ne radi centrifugu ašine ne radi centrifuguašine ne radi centrifuguašine ne radi centrifuguašine ne radi centrifuguašine ne radi centrifugu ašine ne radi centrifuguašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../Logo1.png",
      ImePotrazitelja:"Mujo Hamzić",
      KontaktTelefon:"062-159-193",
      Adresa:"Doboj Kakanj"
    },
    {
      ID:2,
      Naziv:"Popravka el. grijalice",
      Datum:"25/01/2022",
      Vrijeme:"14:00",
      Opis:"Izljevanje ploče",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Elgrijalica.jpg",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Sladna Srebrenik"
    },
    {
      ID:3,
      Naziv:"Popravka pegle",
      Datum:"04/02/2022",
      Vrijeme:"18:00",
      Opis:"Začepile se rupice valjda od kamenca",
      Prihvacen:true,
      Obrisan:false,
      SlikaURL:"../../../assets/Pegla.jpg",
      ImePotrazitelja:"Amir Karaga",
      KontaktTelefon:"062/964-199",
      Adresa:"Gorani Konjic"
    },
    {
      ID:4,
      Naziv:"Zamjena grijača na bojleru",
      Datum:"02/02/2022",
      Vrijeme:"09:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Brčanska Malta Tuzla"
    },
    {
      ID:5,
      Naziv:"Popravka veš el. pećnice",
      Datum:"01/02/2022",
      Vrijeme:"11:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Šerići Živinice Sarajevo"
    },
    {
      ID:6,
      Naziv:"Popravka miksera",
      Datum:"22/02/2022",
      Vrijeme:"12:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Mazoljice Mostar"
    },
    {
      ID:7,
      Naziv:"Popravka frižidera",
      Datum:"21/02/2022",
      Vrijeme:"16:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Centar II Mostar"
    },
    {
      ID:8,
      Naziv:"Zamjena brave",
      Datum:"27/02/2022",
      Vrijeme:"14:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"../../../assets/Masina.png",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Pasjak Mostar"
    },
    {
      ID:9,
      Naziv:"Popravka veš mašine",
      Datum:"21/02/2022",
      Vrijeme:"07:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Mionica Gradačac"
    },
    {
      ID:10,
      Naziv:"Popravka mašine za suđe",
      Datum:"27/02/2022",
      Vrijeme:"20:00",
      Opis:"Mašine ne radi centrifugu",
      Prihvacen:false,
      Obrisan:false,
      SlikaURL:"",
      ImePotrazitelja:"",
      KontaktTelefon:"",
      Adresa:"Hadžići Sarajevo"
    },
  ];




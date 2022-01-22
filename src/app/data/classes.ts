export class Korisnik{
    ID!:number;
    Ime!:string;
    Prezime!:string;
    Spol!:string;
    Username!:string;
    Password!:string;
    BrojTelefona!:string;
    Kanton!:string;
    Grad!:string;
    Uloga!:string;
};

export class Angazman{
    ID!:number;
    Naziv!:string;
    Datum!:string;
    Vrijeme!:string;
    Opis!:string;
    Prihvacen!:boolean;
    Obrisan!:boolean;
    SlikaURL!:string;
    ImePotrazitelja!:string;
    KontaktTelefon!:string;
    Adresa!:string;
    
}

export class Poruka{
    Header!:string;
    Sadrzaj!:string;
    OK:boolean=false;
}

export class PotraziteljOglas{
    ID!:number;
    Naziv!:string;
    Grad!:string;
    Adresa!:string;
    Podrucje!:string;
    Slika!:string;
    Oblast!:string;
    BrojTelefona!:string;
    Opis!:string;
    PotraziteljID!:number;
    Potrazitelj!:string;
    Notification!:boolean;
}

export class Ponuda{
    ID!:number;
    PotraziteljID!:number;
    MajstorID!:number;
    OglasID!:number;
    Opis!:string;
    Datum!:string;
}

export class NavNotification{
    public static PonudeNotification=false;
    public static AngazmaniNotification=false;
}
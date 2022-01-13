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
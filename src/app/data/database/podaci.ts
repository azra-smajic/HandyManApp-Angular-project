import { Korisnik } from "../classes";

export const Korisnici: Korisnik[] = [
    {
        ID: 1,
        Ime: "Tajib",
        Prezime: "Vikalo",
        Spol: "Muški",
        Username: "tajci",
        Password: "tajci",
        BrojTelefona: "+38761155681",
        Uloga: "Potražitelj usluga",
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

  export const Uloge = ["Potražitelj usluga", "Majstor"];

  export const Spolovi = ["Muški", "Ženski", "Neodređeno"]
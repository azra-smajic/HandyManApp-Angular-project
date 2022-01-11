import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/app/data/classes';
import { Korisnici } from 'src/app/data/database/podaci';
import { InfoService } from 'src/app/data/logger-info/info.service';
import { Kantoni } from 'src/app/data/database/podaci';
import { Uloge } from 'src/app/data/database/podaci';
import { Spolovi } from 'src/app/data/database/podaci';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  IsOdabranKanton: any;
  odabraniGrad: any;
  odabraniSpol: any;

  formModel = this.fb.group({
    Ime: ['', Validators.required],
    Prezime: ['', Validators.required],
    SpolID: ['', Validators.required],
    Username: ['', Validators.required],
    Password: ['', [Validators.required, Validators.minLength(8)]],
    KantonID: [, Validators.required],
    GradID: ['', Validators.required],
    UlogaID: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    const grad = this.formModel.get('GradID');
    grad?.disable();
    document.getElementById('ime')?.focus();
  }

  uloge: Array<string> = ["Potražitelj usluga", "Majstor"];

  spolovi = ["Muški", "Ženski", "Neodređeno"]

  handleChange(value: boolean): void {
    const grad = this.formModel.get('GradID');
    if(this.formModel.value.KantonID=="4"){
      grad?.disable();
    }else
      grad?.enable();
  }

  GetGradove=()=> Kantoni.find(x => x.id == this.formModel.value.KantonID)?.gradovi;

  GetKantone=()=> Kantoni;

  GetUloge=()=> Uloge;
  GetSpolove=()=>Spolovi;

  IsKantonOdabran=()=> this.formModel.value.kanton != null;

  Registracija(){
    var NewKorisnik=new Korisnik;
    NewKorisnik.Ime=this.formModel.value.Username;
    NewKorisnik.Prezime=this.formModel.value.Prezime;
    NewKorisnik.Spol=this.formModel.value.SpolID;
    NewKorisnik.Username=this.formModel.value.Username;
    NewKorisnik.Password=this.formModel.value.Password;
    NewKorisnik.BrojTelefona=this.formModel.value.BrojTelefona;
    NewKorisnik.Kanton=this.formModel.value.KantonID;
    NewKorisnik.Grad=this.formModel.value.GradID;
    NewKorisnik.Uloga=this.formModel.value.UlogaID;

    Korisnici.push(NewKorisnik);

    this.toastr.success("Uspješno ste se registrovali. Dobro došli!");

    this.formModel.reset();

    InfoService.LogiraniKorisnik=NewKorisnik;
  }
}

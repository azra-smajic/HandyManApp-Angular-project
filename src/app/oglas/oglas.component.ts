import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadControl, FileUploadValidators} from "@iplab/ngx-file-upload";
import {ToastrService} from "ngx-toastr";
import {Angazmani, Kantoni, MojiOglasi, Oblasti, Oglasi} from "../data/database/podaci";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent implements OnInit {
  firstFormGroup: any;
  secondFormGroup: any;
  isEditable = false;
  datum:any;
  angazmani:any;
  oblasti:any;

  public readonly uploadedFile!:any;
  termin:any;
  @ViewChild('datum1') picker: any;
  @ViewChild('vrijeme1') picker1: any;
  @ViewChild('unos') unos: any;
  private subscription: any;
  public uploadedFiles: any;
  ime:any;
  oglas:any;
  telefon:any;
  regija:any;
  grad:any;
  oblast:any;
  opis:any;
  slika:any;
  public readonly control = new FileUploadControl(
    { listVisible: true, accept: ['image/*'], discardInvalid: true, multiple: false },
    [FileUploadValidators.accept(['image/*']), FileUploadValidators.filesLimit(1)]
  );
  public filesControl = new FormControl(null, FileUploadValidators.filesLimit(2));
  public readonly filesUploadControl = new FileUploadControl(
    { listVisible: true, accept: ['image/*'], discardInvalid: true, multiple: false },
    [FileUploadValidators.accept(['image/*']), FileUploadValidators.filesLimit(1)]
  );

  public demoForm = new FormGroup({
    files: this.filesControl
  });

  constructor(private _formBuilder: FormBuilder, private toastr:ToastrService,public router:Router) {
    this.oglas=router.getCurrentNavigation()?.extras.state

    this.angazmani= Angazmani;

  }
UcitajPodatke(oglas:any){
  this.firstFormGroup.controls['opis1'].setValue(oglas.oglas.Opis);
  this.secondFormGroup.controls['ime'].setValue(oglas.oglas.Naziv);
  this.secondFormGroup.controls['telefon'].setValue(oglas.oglas.BrojTelefona);
  this.secondFormGroup.controls['KantonID'].setValue(oglas.oglas.Podrucje);
  this.secondFormGroup.controls['GradID'].setValue(oglas.oglas.Grad);
  this.secondFormGroup.controls['OblastID'].setValue(oglas.oglas.Oblast);
}
  ngOnInit() {


    this.firstFormGroup = this._formBuilder.group({
      opis1: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      ime: ['',Validators.required],
      telefon: ['',Validators.required],
      KantonID: [, Validators.required],
      GradID: ['', Validators.required],
      OblastID: ['', Validators.required],

    });
    const grad = this.secondFormGroup.get('GradID');
    grad?.disable();
    if(this.oglas!=null){
      this.UcitajPodatke(this.oglas);
      grad?.enable();
    }
  }
  GetGradove=()=> Kantoni.find(x => x.naziv == this.secondFormGroup.value.KantonID)?.gradovi;

  GetKantone=()=> Kantoni;
  GetOblasti=()=> Oblasti;
  handleChange(value: boolean): void {
    const grad = this.secondFormGroup.get('GradID');
    if(this.secondFormGroup.value.KantonID=="4"){
      grad?.disable();
    }else
      grad?.enable();
  }
  Update(){
    this.toastr.success("Uspješno ste dodali sačuvali promjene","Čestitamo");

    Oglasi.splice(this.oglas.indeks,1);
    MojiOglasi.splice(this.oglas.indeks,1);
    Oglasi.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    MojiOglasi.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    this.router.navigateByUrl('/mojiOglasi');
  }
  Poruka1(){
    this.toastr.success("Uspješno ste dodali oglas","Čestitamo");
    Oglasi.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    MojiOglasi.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})

  }

  Poruka2(){
      this.opis=this.firstFormGroup.value.opis1;
  }
  Poruka(){
    if (this.secondFormGroup.value.ime=='' || this.secondFormGroup.value.KantonID=='' ||this.secondFormGroup.value.GradID=='' ||this.secondFormGroup.value.telefon==''  )
    {
      this.toastr.warning("Unesite sva obavezna polja","Upozorenje")

    }
    else{
      this.ime=this.secondFormGroup.value.ime;
      this.telefon=this.secondFormGroup.value.telefon;
      this.regija=this.secondFormGroup.value.KantonID;
      this.grad=this.secondFormGroup.value.GradID;
      this.oblast=this.secondFormGroup.value.OblastID;

    }
  }
  PohraniDatum(){
    this.datum="20-01-2022";

    this.picker.nativeElement.style.display="none";
    this.picker1.nativeElement.style.display="block";

  }
  Slika(){
    if(this.demoForm.value.files!=null){
    this.uploadedFiles=this.demoForm.value.files[0]?.name;}
    return this.uploadedFiles;
  }
  PogresanDatum(){
    this.toastr.warning("Nemoguće odabrati ovaj datum","Upozorenje")
  }
  PohraniVrijeme(){
    this.termin="15:00-16:00";

  }
  PogresnoVrijeme(){
    this.toastr.warning("Nemoguće odabrati ovaj termin","Upozorenje")
  }
  ObrisiUnos(){
    this.termin="";
    this.datum="";
    this.picker.nativeElement.style.display="block";
    this.picker1.nativeElement.style.display="none";
  }
}

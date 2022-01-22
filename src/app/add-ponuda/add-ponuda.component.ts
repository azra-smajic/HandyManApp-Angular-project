import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadControl, FileUploadValidators} from "@iplab/ngx-file-upload";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Angazmani, Kantoni, MojePonude, MojiOglasi, Oblasti, Oglasi, Ponude} from "../data/database/podaci";

@Component({
  selector: 'app-add-ponuda',
  templateUrl: './add-ponuda.component.html',
  styleUrls: ['./add-ponuda.component.css']
})
export class AddPonudaComponent implements OnInit {

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

    Ponude.splice(this.oglas.indeks,1);
    MojePonude.splice(this.oglas.indeks,1);
    Ponude.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    MojePonude.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    this.router.navigateByUrl('/mojePonude');
  }
  Poruka1(){
    this.toastr.success("Uspješno ste dodali oglas","Čestitamo");
    Ponude.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    MojePonude.push({Naziv:this.ime,
      Grad:this.grad,
      Podrucje:this.regija,
      Slika:this.uploadedFiles,
      Oblast:this.oblast,
      BrojTelefona:this.telefon,
      Opis:this.opis,
      Ocjena:0})
    this.router.navigateByUrl('');
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

  Slika(){
    if(this.demoForm.value.files!=null){
      this.uploadedFiles="http://localhost:4200/assets/"+this.demoForm.value.files[0]?.name;}
    return this.uploadedFiles;
  }



}

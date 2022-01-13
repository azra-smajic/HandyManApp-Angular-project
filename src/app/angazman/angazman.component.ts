import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {FileUploadControl, FileUploadValidators} from "@iplab/ngx-file-upload";
import {BehaviorSubject} from "rxjs";
import {Angazmani} from "../data/database/podaci";

@Component({
  selector: 'app-angazman',
  templateUrl: './angazman.component.html',
  styleUrls: ['./angazman.component.css']
})
export class AngazmanComponent implements OnInit {
  ID:number=100;
  firstFormGroup: any;
  secondFormGroup: any;
  isEditable = false;
  datum:any;
  angazmani:any;
  public readonly uploadedFile!:any;
  termin:any;
  @ViewChild('datum1') picker: any;
  @ViewChild('vrijeme1') picker1: any;
  @ViewChild('unos') unos: any;
  private subscription: any;
  public uploadedFiles: any;
  ime:any;
  telefon:any;
  adresa:any;
  opis:any;
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

  constructor(private _formBuilder: FormBuilder, private toastr:ToastrService) {
   this.angazmani= Angazmani;

  }
  private getImage(file: File): void {
    if (FileReader && file) {
      const fr = new FileReader();
      fr.onload = ((e:any) => this.uploadedFile.next(e.target.result));
      fr.readAsDataURL(file);
    } else {
      this.uploadedFile.next(null);
    }
  }
  ngOnInit() {
    this.subscription = this.control.valueChanges.subscribe((values: Array<File>) => this.getImage(values[0]));
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['' ],
    });
    this.secondFormGroup = this._formBuilder.group({
      ime: ['',Validators.required],
      opis: ['',],
      adresa: ['',Validators.required],
      telefon: ['',Validators.required],

    });
  }
  Poruka1(){
    this.toastr.success("Uspješno ste dogovorili angažman","Čestitamo");
      Angazmani.push({
      ID:this.ID++,
      Naziv:"Zahtjev za angažmanom",
      ImePotrazitelja:this.ime,
      KontaktTelefon:this.telefon,
      Adresa:this.adresa,
      Opis:this.opis,
      Datum:this.datum,
      Vrijeme:this.termin,
      SlikaURL:this.uploadedFiles,
      Prihvacen:false,
      Obrisan:false,
    })
  }
  Poruka(){
    if (this.secondFormGroup.value.ime=='' || this.secondFormGroup.value.opis=='' ||this.secondFormGroup.value.adresa=='' ||this.secondFormGroup.value.telefon==''  )
    {
      this.toastr.warning("Unesite sva obavezna polja","Upozorenje")

    }
    else{
      this.ime=this.secondFormGroup.value.ime;
      this.telefon=this.secondFormGroup.value.telefon;
      this.adresa=this.secondFormGroup.value.adresa;
      this.opis=this.secondFormGroup.value.opis;
      this.uploadedFiles=this.demoForm.value.files[0]?.name;
    }
  }
  Slika(){
    if(this.demoForm.value.files!=null){
      this.uploadedFiles=this.demoForm.value.files[0]?.name;}
    return this.uploadedFiles;
  }
  PohraniDatum(){
    this.datum="20-01-2022";

    this.picker.nativeElement.style.display="none";
    this.picker1.nativeElement.style.display="block";

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

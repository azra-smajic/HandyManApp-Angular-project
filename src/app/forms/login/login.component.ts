import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/app/data/classes';
import {Korisnici, MajstorPonude} from 'src/app/data/database/podaci';
import { InfoService } from 'src/app/data/logger-info/info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', [Validators.required]],
  })

  constructor(private fb:FormBuilder, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    document.getElementById('username')?.focus();
  }

  Login(){
    var LoginUser=new Korisnik();
    LoginUser.Username=this.formModel.value.Username;
    LoginUser.Password=this.formModel.value.Password;
    
    var Exist=Korisnici.find(x=>x.Username==LoginUser.Username&&x.Password==LoginUser.Password);
    console.log(Exist)
    if(Exist!=null){
      // var imaPonude=MajstorPonude.filter(x=>x.PotraziteljID==Exist?.ID);
      // if(imaPonude.length>0)
      //   this.toastr.success("Dobili ste novu ponudu za Vaš oglas.");
      this.toastr.success("Uspješno ste se prijavili.\nDobro došli "+Exist.Ime+".");

      InfoService.LogiraniKorisnik=Exist;
      this.router.navigateByUrl("");
    }
    else{
      this.toastr.error("Korisničko ime ili lozinka nisu tačni! Pokušajte ponovo.", "Greška");
      document.getElementById("password")?.focus();
    }
  }

}

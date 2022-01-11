import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/app/data/classes';
import {Korisnici} from 'src/app/data/database/podaci';
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

  constructor(private fb:FormBuilder, private toastr:ToastrService) { }

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
      this.toastr.success("Uspješno ste se prijavili.\nDobro došli "+Exist.Ime+".");
      InfoService.LogiraniKorisnik=Exist;
    }
    else{
      this.toastr.error("Vaši podaci nisu validni! Pokušajte ponovo.", "Greška");
      document.getElementById("password")?.focus();
    }
  }

}

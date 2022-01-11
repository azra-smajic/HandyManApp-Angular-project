import { Component } from '@angular/core';
import { Korisnik } from './data/classes';
import { InfoService } from './data/logger-info/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HandyManApp';

  GetUser=()=> InfoService?.LogiraniKorisnik;
  GetUloga=()=>InfoService?.LogiraniKorisnik?.Uloga;

  OdjaviSe=()=> InfoService.LogiraniKorisnik=null;
}

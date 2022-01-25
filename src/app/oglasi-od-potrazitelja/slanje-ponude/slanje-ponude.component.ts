import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Korisnik, NavNotification, Ponuda, PotraziteljOglas } from 'src/app/data/classes';
import { MajstorPonude, Ponude, PotraziteljOglasi } from 'src/app/data/database/podaci';
import { ConfirmationDialogComponent } from 'src/app/forms/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-slanje-ponude',
  templateUrl: './slanje-ponude.component.html',
  styleUrls: ['./slanje-ponude.component.css']
})
export class SlanjePonudeComponent {

  Opis:string="";

  constructor(
    public dialogRef: MatDialogRef<SlanjePonudeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {korisnik:Korisnik, oglas:PotraziteljOglas}, private dialog:MatDialog, private toastr:ToastrService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async openDialog(header:string, sadrzaj:string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        Header: header,
        Sadrzaj: sadrzaj,
        OK: false
      },
    });

    let myPromise = new Promise(function (resolve) {
      dialogRef.afterClosed().subscribe(result => {
        resolve(result?.OK ? true : false);
      })});

      return await myPromise;
    }

    toJSONLocal (date:any) {
      var local = new Date(date);
      local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      var str=local.toJSON().slice(0, 10).split("-");
      return str[2]+"."+str[1]+"."+str[0]+".";
    }

    hello:any;
  async posaljiPonudu(){

    this.data.oglas.Notification=true;
    this.hello=PotraziteljOglasi.find(x=>x.ID==this.data.oglas.ID);;
    this.hello.Notification=true;
    NavNotification.PonudeNotification=true;
    NavNotification.TajibVikaloPoslaoPonudu=true;
    NavNotification.Hidden=false;
    var ponuda=new Ponuda();
    ponuda.ID=MajstorPonude.length+1;
    ponuda.MajstorID=this.data.korisnik.ID;
    ponuda.PotraziteljID=this.data.oglas.ID;
    ponuda.Opis=this.Opis;
    ponuda.Datum=this.toJSONLocal(new Date());
    ponuda.OglasID=this.data.oglas.ID;
    
    if (await this.openDialog('Pitanje','Jeste li sigurni da želite poslati ovu ponudu?')) {
      MajstorPonude.push(ponuda)
      this.toastr.success("Uspješno ste poslali ponudu.");
      this.onNoClick();
    }
  }
}

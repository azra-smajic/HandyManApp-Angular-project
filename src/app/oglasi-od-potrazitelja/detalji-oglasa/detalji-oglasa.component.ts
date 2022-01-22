import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Angazman, PotraziteljOglas } from 'src/app/data/classes';

@Component({
  selector: 'app-detalji-oglasa',
  templateUrl: './detalji-oglasa.component.html',
  styleUrls: ['./detalji-oglasa.component.css']
})
export class DetaljiOglasaComponent {

  constructor(
    public dialogRef: MatDialogRef<DetaljiOglasaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PotraziteljOglas,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

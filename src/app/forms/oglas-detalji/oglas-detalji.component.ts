import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Angazman } from 'src/app/data/classes';

@Component({
  selector: 'app-oglas-detalji',
  templateUrl: './oglas-detalji.component.html',
  styleUrls: ['./oglas-detalji.component.css']
})
export class OglasDetaljiComponent {

  constructor(
    public dialogRef: MatDialogRef<OglasDetaljiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Angazman,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Poruka } from 'src/app/data/classes';

@Component({
  selector: 'app-confirmation-dialog-yes-no',
  templateUrl: './confirmation-dialog-yes-no.component.html',
  styleUrls: ['./confirmation-dialog-yes-no.component.css']
})
export class ConfirmationDialogYesNoComponent{

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogYesNoComponent>,@Inject(MAT_DIALOG_DATA) public data: Poruka) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  Yes(){
    this.data.OK=true;
  }
}

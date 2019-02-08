import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    modal: NgbModal,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
    ) { }

  ngOnInit() {
  }

  clickCancel(){
    this.dialogRef.close(false)
  }

  clickConfirm(){
    this.dialogRef.close(true)
  }

}

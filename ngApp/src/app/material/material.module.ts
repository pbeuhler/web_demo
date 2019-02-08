import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

    import {
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatDialogModule,
      MAT_DIALOG_DATA,

    } from '@angular/material';

    @NgModule({
      imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
      ],
      exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
      ]
    })
export class MaterialModule {}
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
// tslint:disable-next-line: max-line-length
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatFormFieldControl, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,


],
  exports: [CommonModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule],
})
export class CustomMaterialModule { }

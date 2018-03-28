import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const Module = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  CarouselModule,
  FormsModule,
  ReactiveFormsModule
];
@NgModule({
  imports: [
    CommonModule,
    ...Module
  ],
  exports: [...Module],
  declarations: []
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class SharedModule { }

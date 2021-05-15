import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
   ContactComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        MatIconModule
    ]
})
export class ContactModule { }

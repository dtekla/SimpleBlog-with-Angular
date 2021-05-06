import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {ContactRoutingModule} from "./contact-routing.module";



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
    ContactRoutingModule
  ]
})
export class ContactModule { }

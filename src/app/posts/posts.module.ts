import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { TruncatePipe } from './post-item/truncate.pipe';
import { PostsComponent } from './blog/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {HeaderComponent} from "../header/header.component";
import {RouterModule} from "@angular/router";







@NgModule({
  declarations: [
    TruncatePipe,
    PostsComponent,
    PostItemComponent,
    HeaderComponent
  ],
  exports: [
    TruncatePipe,
    PostsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ]
})
export class PostsModule { }

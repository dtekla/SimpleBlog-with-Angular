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
import {PostsService} from "./posts.service";
import { UcfirstPipe } from './post-detail/ucfirst.pipe';
import {PostsRoutingModule} from "./posts-routing.module";




@NgModule({
  declarations: [
    TruncatePipe,
    PostsComponent,
    PostItemComponent,
    HeaderComponent,
    UcfirstPipe,

  ],
  exports: [
    TruncatePipe,
    PostsComponent,
    HeaderComponent,
    UcfirstPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    PostsRoutingModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }

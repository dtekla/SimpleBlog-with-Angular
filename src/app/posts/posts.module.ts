import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { TruncatePipe } from './post-item/truncate.pipe';
import { PostsComponent } from './blog/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TruncatePipe,
    PostsComponent,
    PostItemComponent

  ],
  exports: [
    TruncatePipe,
    PostsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,

  ]
})
export class PostsModule { }

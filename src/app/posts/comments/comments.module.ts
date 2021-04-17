import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import {CommentService} from "./comment.service";



@NgModule({
  declarations: [
    CommentContainerComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import {CommentService} from "./comment.service";
import {MatCardModule} from "@angular/material/card";
import { CommentFormContainerComponent } from './comment-form-container/comment-form-container.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    CommentContainerComponent,
    CommentItemComponent,
    CommentFormContainerComponent,
    CommentFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    CommentContainerComponent
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule { }

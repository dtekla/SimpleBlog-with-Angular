import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../comment.service";
import {NewComment} from "../newComment.interface";
import {switchMap, tap} from "rxjs/operators";


@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private commentService: CommentService ){
  }

  errorMessage:string = '';
  successfulSending:boolean;

  comment: NewComment = {
    body: null,
    postId: null,
    firstName: null,
    lastName: null,
    email: null,
  }

  getCommentDataFromParent(data){
    this.comment.firstName = data.firstName;
    this.comment.lastName = data.lastName;
    this.comment.email = data.email;
    this.comment.body = data.body;

    this.route.params.pipe( tap(params => {
        this.comment.postId = parseInt(params.id);
      }),
      switchMap(params => this.commentService.addComment(this.comment, params.id)))
      .subscribe(data => {
        console.log(data);
        this.successfulSending = true;
      }, error => {
        this.errorMessage = error;
      });
  }
}

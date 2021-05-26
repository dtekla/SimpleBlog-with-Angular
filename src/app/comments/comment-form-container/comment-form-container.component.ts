import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../comment.service";
import {NewComment, Comment} from "../comment.interface";
import {switchMap} from "rxjs/operators";



@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {



  errorMessage:string = '';
  isSendSuccessful:boolean;
  @Input() postId: number;
  @Output() response = new EventEmitter<any>();


  constructor(private route: ActivatedRoute, private commentService: CommentService ){
  }

  newComment(data: NewComment){
    let comment: Comment = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      body: data.body,
      postId: this.postId,
    };


    this.route.params.pipe(
      switchMap(params => this.commentService.addComment(comment, params.id)))
      .subscribe(data => {
        this.response.emit(data);
        this.isSendSuccessful = true;
      }, error => {
        this.errorMessage = error;
      });
  }

  ngOnInit(): void {
  }
}

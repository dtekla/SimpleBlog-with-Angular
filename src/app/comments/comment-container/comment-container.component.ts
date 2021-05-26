import {Component, Input, OnInit} from '@angular/core';
import {Comment, NewComment} from "../comment.interface";
import {CommentService} from "../comment.service";


@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  comments: Comment[];
  errorMessage: string = '';

  params: Params | undefined;
  @Input() postId: number;


  constructor(
    private commentService: CommentService) {
  }

  setNewComment(newComment: NewComment): void {
    this.comments = [newComment, ...this.comments];
  }

  ngOnInit(): void {
    this.commentService.getComments(this.postId)
      .subscribe(response => {
        this.comments = response;
      }, error => {
        this.errorMessage = error;
      });
  }
}




import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../comment.interface";
import {CommentService} from "../comment.service";


@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  comments: Comment[];
  errorMessage: string = '';
  @Input() postId: number;

  constructor(
    private commentService: CommentService) {
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




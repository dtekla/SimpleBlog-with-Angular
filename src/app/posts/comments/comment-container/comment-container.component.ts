import {Component, OnInit} from '@angular/core';
import {Comment} from "../comment.interface";
import {CommentService} from "../comment.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";


@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  comment: Comment[];
  errorMessage: string = '';
  params: Params | undefined;
  postId: number;


  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params.id)
      this.postId = params.id
    })

    this.commentService.getComments(this.postId).subscribe(comment => {
        this.comment = comment
      },
      error => {
        this.errorMessage = error
      }
    );

  }


}

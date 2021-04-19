import {Component, OnInit} from '@angular/core';
import {Comment} from "../comment.interface";
import {CommentService} from "../comment.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";


@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  comments: Comment[];
  errorMessage: string = '';
  params: Params | undefined;
  postId: number;


  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService) {
  }

  ngOnInit(): void {

    this.route.params.pipe(
      tap(params => {
        this.postId = params.id
      }),
      switchMap(params => this.commentService.getComments(params.id)))
      .subscribe(data => {
        this.comments = data;
      });
  }
}




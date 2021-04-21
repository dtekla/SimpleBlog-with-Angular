import { Component, OnInit } from '@angular/core';
import {switchMap, tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {

  postId: number;

  constructor(
    private route: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {


  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../comment.interface";

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() item: Comment

  constructor() { }

  ngOnInit(): void {
  }

}

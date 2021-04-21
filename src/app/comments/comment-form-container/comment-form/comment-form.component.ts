import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../comment.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    textarea: new FormControl(),
    checkbox: new FormControl(),
    button: new FormControl()
  })
  constructor(  private commentService: CommentService) { }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}

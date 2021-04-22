import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input()
  suc

  @Input()
  err

  commentForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    body: new FormControl(),
    checkbox: new FormControl(),
    button: new FormControl()
  })
  constructor() { }

  @Output() commentDataToParent = new EventEmitter();

  onSubmit() {
    this.commentDataToParent.emit(this.commentForm.value)
  }

  ngOnInit(): void {
  }

}

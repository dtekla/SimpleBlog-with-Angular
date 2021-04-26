import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


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
    firstName: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(6),
      ]
    ),
    lastName: new FormControl(),
    email: new FormControl(
      null,
      [
        Validators.required,
        Validators.email,
      ]
    ),
    body: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(30),
      ]
    ),
    checkbox: new FormControl(
      [Validators.requiredTrue]
    ),
    button: new FormControl()
  })
  constructor() { }

  @Output() commentDataToParent = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() {
    this.commentDataToParent.emit(this.commentForm.value)
  }


  get email(): AbstractControl | null {
    return this.commentForm.get('email');
  }

  get terms(): AbstractControl | null {
    return this.commentForm.get('checkbox');
  }

  get body(): AbstractControl | null {
    return this.commentForm.get('body');
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input()
  isSendSuccessful

  @Input()
  errorMessage

  @Output() comment = new EventEmitter();

  MIN_INPUT_LENGTH = 5;
  MAX_INPUT_LENGTH = 30;

  commentForm: FormGroup = this.fb.group({
    firstName: [null,
        [
          Validators.required,
          Validators.minLength(this.MIN_INPUT_LENGTH),
        ]],
    lastName: [
        null,
        [
          Validators.required,
          Validators.minLength(this.MIN_INPUT_LENGTH),
        ]],
    email: [null, Validators.required],
    body: [null,
      [
      Validators.required,
      Validators.minLength(this.MAX_INPUT_LENGTH)
      ]],
    terms: [false, Validators.requiredTrue]
  })


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }


  onSubmit() {
    this.comment.emit(this.commentForm.value)
    this.commentForm.reset();
  }


  get firstName(): AbstractControl | null {
    return this.commentForm.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.commentForm.get('lastName');
  }

  get email(): AbstractControl | null {
    return this.commentForm.get('email');
  }

  get terms(): AbstractControl | null {
    return this.commentForm.get('terms');
  }

  get body(): AbstractControl | null {
    return this.commentForm.get('body');
  }


}

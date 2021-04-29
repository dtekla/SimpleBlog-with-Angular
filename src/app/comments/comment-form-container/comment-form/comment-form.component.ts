import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";



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

  commentForm: FormGroup = this.fb.group({
    firstName: [null,
        [
          Validators.required,
          Validators.minLength(5),
        ]],
    lastName: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
        ]],
    email: [null, Validators.required],
    body: [null,
      [
      Validators.required,
      Validators.minLength(30)
      ]],
    terms: [false, Validators.requiredTrue]
  })


  constructor(private fb: FormBuilder) { }

  @Output() commentDataToParent = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() {
    this.commentDataToParent.emit(this.commentForm.value)
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

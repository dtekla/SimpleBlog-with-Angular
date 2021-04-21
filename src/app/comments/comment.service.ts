import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Comment} from "./comment.interface";
import {catchError, retry} from "rxjs/operators";
import {newComment} from "./newComment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static readonly API_URL = "http://localhost:3000/comments?_sort=id&_order=desc"

  constructor(private http: HttpClient) { }

  getComments(postId:number): Observable<Comment[]> {
    // @ts-ignore
    return this.http.get<Comment[]>(CommentService.API_URL,{
      params: new HttpParams().set('postId', postId.toString())
    }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<string> {
    let errorMessage = '';

    if(error.error instanceof ProgressEvent) {
      errorMessage = `Error message: ${error.message}`;
    } else {
      errorMessage = `Error message: ${error.message}`;
    }

    return throwError(errorMessage);
  }

  static readonly API_URL_2 = `http://localhost:3000/comments/?postId=`

  addComment(comment: string, id: number): Observable<void> {
    // @ts-ignore
    return this.http.post(`${API_URL_2} ${id}`)
  }

}


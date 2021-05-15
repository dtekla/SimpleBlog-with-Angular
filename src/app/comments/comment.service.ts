import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment, NewComment} from "./comment.interface";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static readonly API_URL = "http://localhost:3000/comments"

  constructor(private http: HttpClient) {
  }

  getComments(postId: number): Observable<Comment[]> {

    return this.http.get<Comment[]>(CommentService.API_URL, {
      params: new HttpParams().set('_sort', 'id').append('_order', 'desc').append('postId', postId.toString())
    })
  }

  addComment(comment: Comment, id: number): Observable<string | NewComment> {
    return this.http.post<NewComment>(CommentService.API_URL, comment);
  }

}


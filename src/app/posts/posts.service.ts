import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Post} from "./post.interface";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  static  readonly API_URL = 'http://localhost:3000/posts'

  constructor(private  http: HttpClient) { }

  getPosts(limit = 6): Observable<Post[]> {
    // @ts-ignore
    return  this.http.get<Post[]>(PostsService.API_URL, {
      params: new HttpParams().set('_limit', limit.toString())
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

  getPostId(id:number): Observable<any> {
    return this.http.get<Post>(PostsService.API_URL +`/${id}`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {POST} from "./post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  static  readonly API_URL = 'http://localhost:3000/posts'

  constructor(private  http: HttpClient) { }

  getPosts(): Observable<any> {
    return  this.http.get(PostsService.API_URL);
  }

  getPostId(id:number): Observable<any> {
    return this.http.get<POST>(PostsService.API_URL +`/${id}`)
  }
}

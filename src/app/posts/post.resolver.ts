import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PostsService} from "./posts.service";
import {Post} from "./post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]> {

  constructor(private postService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.getPosts()
  }
}

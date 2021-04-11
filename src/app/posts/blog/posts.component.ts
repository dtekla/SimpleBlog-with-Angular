import {Component, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import { Post } from "../post.interface";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[];
  noPosts = false;

  errorMessage = '';


  constructor(private postService: PostsService) { }

  ngOnInit(): void {
     this.postService.getPosts().subscribe(
      post => {this.posts = post;
      },
       error => {
          this.errorMessage = error;
       }
    );
  }



}

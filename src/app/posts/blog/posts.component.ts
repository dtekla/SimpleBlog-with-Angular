import {Component, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import { POST } from "../post.interface";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:POST[];

  constructor(private postService: PostsService) { }

  ngOnInit(): any {
     this.postService.getPosts().subscribe(
      post => {this.posts = post;
      }
    );
  }



}

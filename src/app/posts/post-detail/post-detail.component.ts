import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService } from "../posts.service";
import {Post} from "../post.interface";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {


  params: Params | undefined;
  errorMessage:string = '';
  post:Post;
  id;

  constructor(private route:ActivatedRoute, private postService: PostsService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.postService.getPostId(this.id).subscribe(
        post => {this.post = post;
        },
        error => {
          this.errorMessage = error;
        }
      );
    });
  }

}

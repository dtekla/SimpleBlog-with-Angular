import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostResolver} from "./post.resolver";
import {PostsComponent} from "./blog/posts.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";



const postsRoutes:Routes = [
  {
    path: '',
    resolve: {
      posts: PostResolver
    },
    component: PostsComponent,
  },
  {path: 'post', children: [
      {path: ':id', component: PostDetailComponent}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }

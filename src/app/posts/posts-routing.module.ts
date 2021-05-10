import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostsComponent} from "./blog/posts.component";
import {PostResolver} from "./post.resolver";



const routes:Routes = [
  {path: '',
    resolve: {
    posts: PostResolver
    },
    component: PostsComponent},
  {path: 'post/:id', component: PostDetailComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }

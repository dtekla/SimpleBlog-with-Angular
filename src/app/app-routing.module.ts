import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {PostsComponent} from "./posts/blog/posts.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes:Routes = [
  {path: '', component: PostsComponent},
  {path: 'post', component: PostDetailComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }

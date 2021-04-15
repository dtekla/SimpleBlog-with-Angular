import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {PostsComponent} from "./posts/blog/posts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContactComponent} from "./contact/contact.component";
import {PageComponent} from "./page/page.component";

const routes:Routes = [
  {path: '', component: PostsComponent},
  {path: 'post/:id', component: PostDetailComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'page', component: PageComponent},
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

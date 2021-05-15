import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {PostsComponent} from "./posts/blog/posts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PageComponent} from "./page/page.component";
import {TermsComponent} from "./terms/terms.component";
import {PostResolver} from "./posts/post.resolver";

const routes:Routes = [
  //{path: '', component: PostsComponent},
  //{path: 'post/:id', component: PostDetailComponent, pathMatch: 'full'},
  //{path: '', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
  {path: 'contact', loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'page', component: PageComponent},
  {path: 'terms-conditions', component: TermsComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', enableTracing: true}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

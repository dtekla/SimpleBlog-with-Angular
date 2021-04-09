import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import {PostsModule} from "./posts/posts.module";
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    PostsModule,
    RouterModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

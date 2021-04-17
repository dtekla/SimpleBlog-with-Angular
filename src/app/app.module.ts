import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import {PostsModule} from "./posts/posts.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { PageComponent } from './page/page.component';
import {FooterComponent} from "./footer/footer.component";
import { TermsComponent } from './terms/terms.component';
import {ContactModule} from "./contact/contact.module";
import {RouterModule} from "@angular/router";
import {CommentsModule} from "./posts/comments/comments.module";


@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    NotFoundComponent,
    PageComponent,
    FooterComponent,
    TermsComponent

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        PostsModule,
        ContactModule,
        RouterModule,
        CommentsModule
    ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

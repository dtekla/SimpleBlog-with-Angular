import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { BlogComponent } from './blog/blog.component';
import {MatButtonModule} from '@angular/material/button';
import { TruncatePipe } from './blog/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
